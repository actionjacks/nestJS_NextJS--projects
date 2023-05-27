using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Identity;
using MinimalAuthApi;
using System.Security.Claims;

var builder = WebApplication.CreateBuilder(args);

// #3 this for pseude db
builder.Services.AddDataProtection();
builder.Services.AddSingleton<Database>();
builder.Services.AddSingleton<IPasswordHasher<User>, PasswordHasher<User>>();

builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
    .AddCookie(CookieAuthenticationDefaults.AuthenticationScheme);
//#3

builder.Services.AddAuthorization(builder => //#3
{
    builder.AddPolicy("manager", pb =>
    {
        pb.RequireAuthenticatedUser()
        .AddAuthenticationSchemes(CookieAuthenticationDefaults.AuthenticationScheme)
        .RequireClaim("role", "manager");
    });
});

/*
builder.Services.AddDataProtection();
builder.Services.AddHttpContextAccessor();
builder.Services.AddScoped<AuthService>();
*/

/*
builder.Services.AddAuthentication("cookie")
    .AddCookie("cookie");//#1
*/

builder.Services.AddAuthorization(builder =>
{
    builder.AddPolicy("country", pb =>
    {
        pb.RequireAuthenticatedUser()
        .AddAuthenticationSchemes("cookie")
        .RequireClaim("passport_type", "pl");
    });
});//#2

builder.Services.AddControllers();

var app = builder.Build();

app.UseHttpsRedirection();

/*
app.Use((ctx, next) =>
{
    var idp = ctx.RequestServices.GetRequiredService<IDataProtectionProvider>();

    var protector = idp.CreateProtector("auth-cookie");

    var authCookie = ctx.Request.Headers.Cookie.FirstOrDefault(c => c.StartsWith("auth="));

    var protectedPayload = authCookie?.Split("=")?.Last();
    if (protectedPayload == null)
    {
        return next();
    }
    var payload = protector.Unprotect(protectedPayload);

    var parts = payload.Split(':');
    var key = parts[0];
    var value = parts[1];

    var claims = new List<Claim>();
    claims.Add(new Claim(key, value));
    var identity = new ClaimsIdentity(claims);
    ctx.User = new ClaimsPrincipal(identity);

    return next();
});
*/
app.UseAuthentication(); // it's the same thing on top #1
/*
app.Use((ctx, next) =>
{
    if (ctx.Request.Path.StartsWithSegments("/login"))
    {
        return next();
    }
    if (!ctx.User.Identities.Any(x => x.AuthenticationType == "cookie"))
    {
        ctx.Response.StatusCode = 401;
        return Task.CompletedTask;
    }
    if (!ctx.User.HasClaim("passport_type", "pl"))
    {
        ctx.Response.StatusCode = 403;
        return Task.CompletedTask;
    }
    return next();
});
*/
app.UseAuthorization();// it's the same thing on top #2

app.MapGet("/unsecure", (HttpContext ctx) =>
{
    return ctx.User.FindFirst("usr")?.Value ?? "empty";
}).RequireAuthorization("country");

// [AuthScheme(cookie)]
app.MapGet("/poland", (HttpContext ctx) =>
{
    return "allowed";
}).RequireAuthorization("country"); ;

// app.MapGet("/login", (AuthService auth) =>
app.MapGet("/login", async (HttpContext ctx) =>
{
    // auth.SignIn();

    var claims = new List<Claim>();
    claims.Add(new Claim("usr", "jack"));
    claims.Add(new Claim("passport_type", "pl"));

    var identity = new ClaimsIdentity(claims, "cookie");

    var user = new ClaimsPrincipal(identity);
    await ctx.SignInAsync("cookie", user);
    return "ok";
}).AllowAnonymous();

// localhost/registerpseudedb?username=jack&password=123 #3
app.MapGet("/registerpseudedb", async (
    string username,
    string password,
    IPasswordHasher<User> hasher,
    Database db,
    HttpContext ctx
    ) =>
{
    var user = new User() { Username = username };
    user.PasswordHash = hasher.HashPassword(user, password);
    await db.PutAsync(user);

    await ctx.SignInAsync(
        CookieAuthenticationDefaults.AuthenticationScheme,
        UserHelper.Convert(user));

    return user;
});

app.MapGet("/loginpseudedb", async ( //#3
    string username,
    string password,
    IPasswordHasher<User> hasher,
    Database db,
    HttpContext ctx
    ) =>
{
    var user = await db.GetUserAsync(username);
    var result = hasher.VerifyHashedPassword(user, user.PasswordHash, password);
    if (result == PasswordVerificationResult.Failed)
    {
        return "bad credentials";
    }

    await ctx.SignInAsync(
        CookieAuthenticationDefaults.AuthenticationScheme,
        UserHelper.Convert(user));

    return "logged";
});

app.MapGet("/promote", async
    (string username,
    Database db) =>
{
    var user = await db.GetUserAsync(username);
    user.Claims.Add(new UserClaim() { Type = "role", Value = "manager" });
    await db.PutAsync(user);
    return "Promoted";
});

app.MapGet("/protecteddb", () => "secret need manager").RequireAuthorization("manager");


app.Run();

public class UserHelper
{
    public static ClaimsPrincipal Convert(User user)
    {
        var claims = new List<Claim>()
        {
            new Claim("username",user.Username),
        };
        claims.AddRange(user.Claims.Select(x => new Claim(x.Type, x.Value)));

        var identity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);

        return new ClaimsPrincipal(identity);
    }
}

/*
public class AuthService
{
    private readonly IDataProtectionProvider _idp;
    private readonly IHttpContextAccessor _accessor;

    public AuthService(IDataProtectionProvider idp, IHttpContextAccessor accessor)
    {
        _idp = idp;
        _accessor = accessor;
    }
    public void SignIn()
    {
        var protector = _idp.CreateProtector("auth-cookie");
        _accessor.HttpContext.Response.Headers["set-cookie"] = $"auth={protector.Protect("usr:jack")}";
    }
}
*/
