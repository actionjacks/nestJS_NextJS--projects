using Microsoft.AspNetCore.Mvc.RazorPages;
using RazorPagesBlog.Data;
using RazorPagesBlog.Models;

namespace RazorPagesBlog.Pages.Categories
{
    public class IndexModel : PageModel
    {
        private readonly ApplicationDbContext _context;
        public IEnumerable<Category> CategoryList { get; set; }
        public IndexModel(ApplicationDbContext context)
        {
            _context = context;
        }
        // onGet hook run when get to page
        public void OnGet()
        {
            CategoryList = _context.Categories.ToList();
        }
    }
}
