using Blog.Data;
using Blog.Repository.IRepository;

namespace Blog.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        private ApplicationDbContext _context;
        public ICategoryRepository Category { get; private set; }
        public IProductsRepository Products { get; private set; }

        public UnitOfWork(ApplicationDbContext context)
        {
            _context = context;
            Category = new CategoryRepository(_context);
            Products = new ProductRepository(_context);
        }
        public void Save()
        {
            _context.SaveChanges();
        }
    }
}
