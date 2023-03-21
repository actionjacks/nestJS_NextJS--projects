using Microsoft.EntityFrameworkCore;
using nyapi.Models;

namespace nyapi.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }
        public DbSet<Character> Characters => Set<Character>();
    }
}
