using Core;
using Core.Services;

var builder = WebApplication.CreateBuilder(args);
//register services
// depenInjection
builder.Services.AddSingleton<IResponseFormatter, HtmlResponseFormatter>();

var app = builder.Build();

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

app.MapGet("/", () => "Hello World!");

app.Run();

// 44:09