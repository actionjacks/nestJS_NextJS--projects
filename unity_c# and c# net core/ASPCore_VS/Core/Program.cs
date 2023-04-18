using Core;
using Core.Infrastructure;
using Core.Models;
using Core.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;

var builder = WebApplication.CreateBuilder(args);
// use SQL
builder.Services.AddDbContext<DataContext>(options =>
{
    options.UseSqlServer(builder.Configuration["ConnectionStrings:DbConnection"]);
});

// Add controller
builder.Services.AddControllers();

// Add controllers and views
builder.Services.AddControllersWithViews();

builder.Services.AddControllers().AddNewtonsoftJson();

builder.Services.Configure<MvcNewtonsoftJsonOptions>(options =>
{
    options.SerializerSettings.NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore;
});

// register services
// depenInjection
builder.Services.AddSingleton<IResponseFormatter, HtmlResponseFormatter>();

builder.Services.AddControllersWithViews(); // u¿ycie nadpisze view widoki
// builder.Services.AddRazorPages(); // u¿ycie nadpisze view widoki

var app = builder.Build();

app.MapControllers();

// Database (mock data)---------
var context = app.Services.CreateScope().ServiceProvider.GetRequiredService<DataContext>();
SeedData.SeedDatase(context);
const string BASEURL = "/api/products/mock";
app.MapGet($"{BASEURL}/{{id}}", async (HttpContext context, DataContext data) =>
{
    string id = context.Request.RouteValues["id"] as string;
    if (id != null)
    {
        Product product = data.Products.Find(long.Parse(id));
        if (product == null)
        {
            context.Response.StatusCode = StatusCodes.Status404NotFound; return;
        }
        context.Response.ContentType = "application/json";
        await context.Response.WriteAsync(JsonSerializer.Serialize<Product>(product));
    }
});
app.MapGet(BASEURL, async (HttpContext context, DataContext data) =>
{
    context.Response.ContentType = "application/json";
    await context.Response.WriteAsync(JsonSerializer.Serialize<IEnumerable<Product>>(data.Products));
});
app.MapPost(BASEURL, async (HttpContext context, DataContext data) =>
{
    Product product = await JsonSerializer.DeserializeAsync<Product>(context.Request.Body);
    if (product != null)
    {
        await data.AddAsync(product);
        await data.SaveChangesAsync();
        context.Response.StatusCode = StatusCodes.Status200OK; return;
    }
});
//-------------------------------

app.MapGet("/config", async (HttpContext context, IConfiguration confing) =>
{
    // form appsetting.Development.json
    string defaultDebug = confing["Logging:LogLevel:Default"];
    await context.Response.WriteAsync(defaultDebug);
});

/*
if (app.Environment.IsDevelopment())
{
    app.MapGet("/", () => "Development!");
}
*/

// http://localhost:3000/?custom=true - custom middleware
app.Use(async (context, next) =>
{
    if (context.Request.Method == HttpMethods.Get && context.Request.Query["custom"] == "true")
    {
        context.Response.ContentType = "text/plain";
        await context.Response.WriteAsync("Custom Middleware \n");
    }
    await next();
});

//use middleware from class - nie dzia³a huj wie czemu
app.UseMiddleware<Middleware>();
// app.UseRequestClassMiddleware();

//satus code after response
app.Use(async (context, next) =>
{
    await next();
    await context.Response.WriteAsync($"\n Status code: {context.Response.StatusCode}");
});

//Formatters
IResponseFormatter formatter = new TextResponseFormatter();
app.MapGet("/formatter2", async context =>
{
    await formatter.Format(context, "Formatter");
});
app.MapGet("/formatter", async (HttpContext context, IResponseFormatter formatter) =>
{
    await formatter.Format(context, "Formatter");
});

/* Use session
builder.Services.AddSession(option =>
{
    option.IdleTimeout = TimeSpan.FromSeconds(30);
    option.Cookie.IsEssential = true;
});
app.UseSession();
*/

//SET cookie
app.MapGet("/cookie", async context =>
{
    int counter = int.Parse(context.Request.Cookies["counter"] ?? "0") + 1;
    context.Response.Cookies.Append(
        "counter",
        counter.ToString(),
        new CookieOptions
        {
            MaxAge = TimeSpan.FromMinutes(60)
        });
    await context.Response.WriteAsync($"Cookie: {counter}");
});
//Clear cookie
app.MapGet("/clear", context =>
{
    context.Response.Cookies.Delete("counter");
    context.Response.Redirect("/");
    return Task.CompletedTask;
});

app.MapGet("/https", async context =>
{
    await context.Response.WriteAsync($"HTTPS request {context.Request.IsHttps}");
});
// app.UseHttpsRedirection();

// view controllers http://localhost:3000/ or http://localhost:3000/home or http://localhost:3000/index
// app.MapControllerRoute("Default", "{controller=Home}/{action=Index}/{id?}");
app.MapDefaultControllerRoute();
// app.MapGet("/", () => "Hello World!");

// custom Endpoint
app.MapGet("/endpoint", CustomEndpoint.Endpoint);

// app.MapRazorPages(); // u¿ycie nadpisze view widoki

app.UseStaticFiles(); //localhost:3000/static.html
app.Run();
