using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using RazorPagesBlog.Data;
using RazorPagesBlog.Models;

namespace RazorPagesBlog.Pages.Categories
{
    // [BindProperties] - bind all properties
    public class CreateModel : PageModel
    {
        private readonly ApplicationDbContext _context;
        [BindProperty]
        public Category Category { get; set; }
        public CreateModel(ApplicationDbContext context)
        {
            _context = context;
        }
        public void OnGet()
        {
        }
        public IActionResult OnPost()
        {
            _context.Categories.Add(Category);
            _context.SaveChanges();
            return RedirectToPage("Index");
        }
    }
}
