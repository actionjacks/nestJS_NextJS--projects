using System.ComponentModel.DataAnnotations;

namespace WebApplicationAPI.Models.Dto
{
    public class UserRegistrationRequestDTO
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
