using Microsoft.Extensions.Options;

namespace Core
{
    public class Middleware
    {
        private RequestDelegate _next;
        private MiddlewareOptions _options;
        public Middleware(RequestDelegate next, IOptions<MiddlewareOptions> options)
        {
            _next = next;
            _options = options.Value;
        }
        public async Task Invoke(HttpContext context)
        {
            // http://localhost:3000/options
            if (context.Request.Path == "/options")
            {
                await context.Response.WriteAsync($"{_options.Name}, {_options.Description}");
                return;
            }

            if (context.Request.Method == HttpMethods.Get && context.Request.Query["custom"] == "true")
            {
                if (!context.Response.HasStarted)
                {
                    context.Response.ContentType = "text/plain";
                }
                await context.Response.WriteAsync("Class-based Middleware \n");
            }
            await _next(context);
        }
    }
    public static class RequestClassMiddleware
    {
        public static IApplicationBuilder UseRequestClassMiddleware(
            this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<Middleware>();
        }
    }
}
