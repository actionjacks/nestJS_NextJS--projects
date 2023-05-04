using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using RazorPagesBlog.Data;
using RazorPagesBlog.Models;

namespace RazorPagesBlog.Pages.Categories
{
    public class DeleteModel : PageModel
    {
        private readonly ApplicationDbContext _context;
        [BindProperty]
        public Category? Category { get; set; }
        public DeleteModel(ApplicationDbContext context)
        {
            _context = context;
        }
        public void OnGet(int? id)
        {
            if (id == null && id != 0)
            {
                Category = _context.Categories.Find(id);
            }
        }
        public IActionResult OnPost()
        {
            Category? categoryToRemove = _context.Categories.Find(Category);
            if (categoryToRemove == null)
            {
                return NotFound();
            }
            _context.Categories.Remove(categoryToRemove);
            _context.SaveChanges();
            return RedirectToPage("Index");
        }
    }
}
