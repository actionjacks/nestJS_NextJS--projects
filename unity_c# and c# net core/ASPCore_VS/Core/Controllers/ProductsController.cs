using Core.Infrastructure;
using Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace Core.Controllers
{   //ProductsController - get Products as base url
    [ApiController] //  give validaction !SaveProduct and UpdateProduct
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private DataContext _context;

        public ProductsController(DataContext context)
        {
            _context = context;
        }

        //api/products
        [HttpGet]
        public IAsyncEnumerable<Product> GetProducts()
        {
            return _context.Products.AsAsyncEnumerable();
            /* mock data for test
            return new Product[]
            {
            new Product { Name = "Product#1" },
            new Product { Name = "Product#2" }
            };
            */
        }

        //api/products/1
        [HttpGet("{id}")]
        public async Task<IActionResult> GetProduct(long id, [FromServices] ILogger<ProductsController> logger)
        {
            logger.LogDebug("GetProduct Action Invoked");
            Product? product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }
            // return Ok(product);
            // or return specyfy params
            return Ok(new
            {
                Id = product.Id,
                Name = product.Name,
                Price = product.Price,
                CategoryId = product.CategoryId,
            });

            // return _context.Products.FirstOrDefault();
            // return mock data
            // return new Product() { Id = 1, Name = "Test" };
        }

        //api/products
        [HttpPost]
        public async Task<IActionResult> SaveProduct([FromBody] Product product)
        {
            /*
            if (ModelState.IsValid)
            {
                await _context.Products.AddAsync(product);
                await _context.SaveChangesAsync();
                return Ok(product);
            }
            return BadRequest(ModelState);
            */
            await _context.Products.AddAsync(product);
            await _context.SaveChangesAsync();
            return Ok(product);
        }

        //api/products
        [HttpPut]
        public void UpdateProduct([FromBody] Product product)
        // public void UpdateProduct(Product product) - [ApiController] - no need FromBody
        {
            _context.Update(product);
            _context.SaveChanges();
        }

        //api/products/1
        [HttpDelete("{id}")]
        public void DeleteProduct(long id)
        {
            _context.Products.Remove(new Product { Id = id });
            _context.SaveChanges();
        }

        // api/products/redirect
        [HttpGet("redirect")]
        public IActionResult Redirect()
        {
            //return Redirect("/api/products/1");
            //return RedirectToAction(nameof(GetProduct), new { Id = 1 });
            return RedirectToRoute(new
            {
                controller = "Products",
                action = "GetProduct",
                Id = 1
            });
        }
    }
}
