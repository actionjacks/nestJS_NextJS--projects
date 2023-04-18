using Core.Infrastructure;
using Core.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Core.Pages
{
    public class EditModel : PageModel
    {
        private DataContext _context;
        public Product Product { get; set; } // public and can acces in Razor page

        public EditModel(DataContext context)
        {
            _context = context;
        }
        // invoke automatic after get method
        public async Task OnGetAsync(long id = 1)
        {
            Product = await _context.Products.FindAsync(id);
        }

        public async Task<IActionResult> OnPostAsync(long id, decimal price)
        {
            Product product = await _context.Products.FindAsync(id);
            // to jest to samo
            if (product != null)
            {
                product.Price = price;
            }
            await _context.SaveChangesAsync();
            return RedirectToPage();
        }
    }
}
