using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Blog.Models.Models
{
    public class Category
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [MaxLength(30)]
        [DisplayName("Category Name")]
        public string Name { get; set; }
        [DisplayName("Category Order")]
        [Range(1, 100, ErrorMessage = "Custom Error Range need be between 1-100")]
        public int DisplayOrder { get; set; }
    }
}
