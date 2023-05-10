using System.ComponentModel.DataAnnotations;

namespace WebApplicationAPI.Models.Dto
{
    public class VillaDTO
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(255)]
        public string Name { get; set; }
        public int Occupancy { get; set; }
        public string Sqft { get; set; }

        public string Details { get; set; }
        [Required]
        public double Rate { get; set; }
        public string ImageUrl { get; set; }
    }
}
