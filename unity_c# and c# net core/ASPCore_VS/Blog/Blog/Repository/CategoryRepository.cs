using Blog.Data;
using Blog.Models;
using Blog.Repository.IRepository;

namespace Blog.Repository
{
    public class CategoryRepository : Repository<Category>, ICategoryRepository
    {
        private ApplicationDbContext _context;
        // pass to parent class constructor, :base(context)
        // context is DB
        public CategoryRepository(ApplicationDbContext context) : base(context)
        {
            _context = context;
        }

        public void Update(Category category)
        {
            _context.Categories.Update(category);
        }
    }
}
