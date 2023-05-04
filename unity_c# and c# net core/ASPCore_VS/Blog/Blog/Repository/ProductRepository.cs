using Blog.Data;
using Blog.Models;
using Blog.Repository.IRepository;

namespace Blog.Repository
{
    public class ProductRepository : Repository<Products>, IProductsRepository
    {
        private ApplicationDbContext _context;
        // pass to parent class constructor, :base(context)
        // context is DB
        public ProductRepository(ApplicationDbContext context) : base(context)
        {
            _context = context;
        }
        public void Update(Products products)
        {
            // or update only edited properties
            var objFromDb = _context.Products.FirstOrDefault(u => u.Id == products.Id);
            if (objFromDb != null)
            {
                objFromDb.Title = products.Title;
                objFromDb.ISBN = products.ISBN;
                objFromDb.Price = products.Price;
                objFromDb.Price50 = products.Price50;
                objFromDb.ListPrice = products.ListPrice;
                objFromDb.Price100 = products.Price100;
                objFromDb.Description = products.Description;
                objFromDb.CategoryId = products.CategoryId;
                objFromDb.Author = products.Author;
                if (products.ImageUrl != null)
                {
                    objFromDb.ImageUrl = products.ImageUrl;
                }
            }
            // _context.Products.Update(products);
        }
    }
}
