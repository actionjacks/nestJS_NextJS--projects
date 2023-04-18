using Microsoft.AspNetCore.Mvc;

namespace Core.Components
{
    public class PageSize : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            HttpClient client = new HttpClient();
            HttpResponseMessage response = await client.GetAsync("http://google.pl");

            return View(response.Content.Headers.ContentLength);
        }
    }
}
