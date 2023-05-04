using Blog.Models;

namespace Blog.Repository.IRepository
{
    public interface IProductsRepository : IRepository<Products>
    {
        void Update(Products products);
    }
}
