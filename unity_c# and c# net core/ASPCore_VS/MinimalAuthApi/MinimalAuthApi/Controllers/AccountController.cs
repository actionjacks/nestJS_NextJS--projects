using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace MinimalAuthApi.Controllers
{
    [ApiController]
    public class AccountController : ControllerBase
    {
        [HttpGet("/loginHome")]
        public IActionResult Login() =>
            SignIn(new ClaimsPrincipal(
                new ClaimsIdentity(
                    new Claim[]
                    {
                        new Claim(ClaimTypes.NameIdentifier, Guid.NewGuid().ToString()),
                        new Claim("my_role_claim_extravagana", "admin"),

                    },
                    "cookie",
                    nameType: null,
                    roleType: "my_role_claim_extravagana"
                    )), authenticationScheme: "cookie"
        );
    }
}
