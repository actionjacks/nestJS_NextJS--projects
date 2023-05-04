using System.Linq.Expressions;

namespace Blog.Repository.IRepository
{
    public interface IRepository<T> where T : class
    {
        // in this context is Category
        IEnumerable<T> GetAll(string? includeProperties = null);
        // Category? categoryById_1 = _context.Categories.FirstOrDefault(u => u.Id == id);
        T Get(Expression<Func<T, bool>> filter, string? includeProperties = null);
        void Add(T entity);
        // void Update(T entity);
        void Delete(T entity);
        void DeleteAll(IEnumerable<T> entity);
    }
}
