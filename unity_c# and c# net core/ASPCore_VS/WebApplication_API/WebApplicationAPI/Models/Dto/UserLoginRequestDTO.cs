﻿using System.ComponentModel.DataAnnotations;

namespace WebApplicationAPI.Models.Dto
{
    public class UserLoginRequestDTO
    {
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
