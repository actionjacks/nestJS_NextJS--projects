using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace MinimalAuthApi.Controllers
{
    [ApiController]
    public class HomeController : ControllerBase
    {
        [HttpGet("/HomeHome")]
        public string Index() => "Index route";

        [HttpGet("/secret")]
        [Authorize(Roles = "admin")]
        public string Secret() => "Secret route";
    }
}
