﻿using Core.Services;

namespace Core
{
    public class CustomEndpoint
    {
        public static async Task Endpoint(HttpContext context)
        {
            IResponseFormatter formatter = context.RequestServices.GetRequiredService<IResponseFormatter>();
            await formatter.Format(context, "Custom Endpoint");

        }
    }
}
