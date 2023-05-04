namespace Blog.Repository.IRepository
{
    public interface IUnitOfWork
    {
        ICategoryRepository Category { get; }
        IProductsRepository Products { get; }
        void Save();
    }
}
