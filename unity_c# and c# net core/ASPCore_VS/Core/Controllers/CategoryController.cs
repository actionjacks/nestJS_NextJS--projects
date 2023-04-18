using Core.Infrastructure;
using Core.Models;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Core.Controllers
{   // CategoryController - get Category as base url
    [ApiController]
    [Route("api/[controller]")]
    public class CategoryController : ControllerBase
    {
        private readonly DataContext _context;

        public CategoryController(DataContext context)
        {
            _context = context;
        }

        //api/category/1
        [HttpGet("{id}")]
        public async Task<Category> GetCategory(long id)
        {
            // return await _context.Categories.FindAsync(id);
            // Get related Datas
            Category? category = await _context.Categories.Include(c => c.Products).FirstOrDefaultAsync(c => c.Id == id);
            if (category?.Products != null)
            {
                foreach (Product product in category.Products)
                {
                    product.Category = null;
                }
            }
            return category;
        }

        //api/category/1
        [HttpPatch("{id}")]
        [Produces("application/json", "application/xml")] // acceptes body format
        public async Task<Category> PatchCategory(long id, JsonPatchDocument<Category> patchDoc)
        {
            Category category = await _context.Categories.FindAsync(id);
            if (category != null)
            {
                patchDoc.ApplyTo(category);
                await _context.SaveChangesAsync();
            }
            return category;
        }
    }
}
