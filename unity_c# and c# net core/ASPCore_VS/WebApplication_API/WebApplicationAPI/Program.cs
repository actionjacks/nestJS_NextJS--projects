using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text;
using WebApplicationAPI.Configuration;
using WebApplicationAPI.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<ApplicationDbContext>(option =>
{
    option.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

// config JWT
builder.Services.Configure<JwtConfig>(builder.Configuration.GetSection("JwtConfig"));

builder.Services.AddAuthentication(option =>
    {
        option.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        option.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
        option.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    })
.AddJwtBearer(option =>
{
    var key = Encoding.ASCII.GetBytes(builder.Configuration.GetSection(key: "JwtConfig:Secret").Value);

    option.TokenValidationParameters = new TokenValidationParameters
    {
        // 
        ValidateIssuer = false, // dev no check 
        ValidateAudience = false, // dev no check
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        RequireExpirationTime = false, // dev needs to be updated when refresh token
        /* dev
        ValidIssuer = "https://localhost:7191",
        ValidAudience = "https://localhost:7191",
        */
        IssuerSigningKey = new SymmetricSecurityKey(key)
        /*
        IssuerSigningKey = new SymmetricSecurityKey(
            Encoding.UTF8.GetBytes(builder.Configuration.GetSection("Token:Key").Value))
        */
    };
});

builder.Services.AddDefaultIdentity<IdentityUser>(options => options.SignIn.RequireConfirmedEmail = false)
    .AddEntityFrameworkStores<ApplicationDbContext>();

builder.Services.AddControllers(options =>
{
    // options.ReturnHttpNotAcceptable = true;

}).AddNewtonsoftJson()
  .AddXmlDataContractSerializerFormatters();

/* KIEDY MAM NOWA KLASE I CHCE UZYWAC DEPENDECII ENDZEKSON TRZEBA ZAREJESTROWAC JAKO SERWIS
     ZEBY INSTANCJA TEJ KLASY ZOSTALA UZYTA W PROJEKCIE
     builder.Services.AddSingleton<IMyService, MyService>(); 
                                        interface, klasa
*/

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen(option =>
{
    // OPTION FOR TOKEN nie dzia³a :(
    /*
    option.AddSecurityDefinition("oauth2", new OpenApiSecurityScheme
    {
        Description = "Standard Authorization header using the Bearer scheme(\"bearer{token}\")",
        In = ParameterLocation.Header,
        Name = "Authorization",
        Type = SecuritySchemeType.ApiKey
    });

    option.OperationFilter<SecurityRequirementsOperationFilter>();

    */
    /*
     * OPTION FOR JWT
     */
    option.SwaggerDoc("v1", new OpenApiInfo { Title = "Demo API", Version = "v1" });
    option.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        In = ParameterLocation.Header,
        Description = "Please enter a valid token",
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        BearerFormat = "JWT",
        Scheme = "Bearer"
    }

    );
    option.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type=ReferenceType.SecurityScheme,
                    Id="Bearer"
                }
            },
            new string[]{}
        }
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication(); // need for token 
app.UseAuthorization(); // need for token

app.MapControllers();

app.Run();
