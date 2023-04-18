using Core.Infrastructure;
using Core.Models;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Core.Pages
{
    public class IndexModel : PageModel
    {
        private DataContext _context;
        public Product Product { get; set; } // public and can acces in Razor page

        public string MyProp = "MY PROPERTY";

        public IndexModel(DataContext context)
        {
            _context = context;
        }
        // invoke automatic after get method
        public async Task OnGetAsync(long id = 1)
        {
            Product = await _context.Products.FindAsync(id);
        }
    }
}
