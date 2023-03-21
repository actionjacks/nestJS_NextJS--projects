using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using nyapi.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace nyapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        public static User user = new User();
        public readonly IConfiguration _configuration;

        public AuthController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost("register")]
        public ActionResult<User> Register(UserDto request)
        {
            string passwordHash = BCrypt.Net.BCrypt.HashPassword(request.Password);

            user.Username = request.Username;
            user.PasswordHash = passwordHash;

            return Ok(user);
        }

        [HttpPost("login")]
        public ActionResult<User> Login(UserDto request)
        {
            if (user.Username != request.Username)
            {
                return BadRequest("User not found");
            }
            if (!BCrypt.Net.BCrypt.Verify(request.Password, user.PasswordHash))
            {
                return BadRequest("wrong Password");
            }
            string token = CreateToken(user);

            var simpleObject = new
            {
                user,
                token
            };
            // return Ok(token);
            return Ok(simpleObject);
        }
        private string CreateToken(User user)
        {
            List<Claim> claims = new List<Claim>
            {
              new Claim(ClaimTypes.Name, user.Username),
              new Claim(ClaimTypes.Role, "Admin") // add admin role 
              //[HttpGet(Name = "GetWeatherForecast"), Authorize(Roles = "Admin")]
            };

            // from appsettings.json
            var keyValue = Encoding.UTF8.GetBytes(_configuration.GetSection("AppSettings:Token").Value!);

            var key = new SymmetricSecurityKey(keyValue);
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: credentials);

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);
            return jwt;
        }
    }
}
