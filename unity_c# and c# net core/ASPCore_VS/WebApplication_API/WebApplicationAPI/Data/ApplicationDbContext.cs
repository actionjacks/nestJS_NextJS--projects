using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using WebApplicationAPI.Models;

namespace WebApplicationAPI.Data
{
    // public class ApplicationDbContext : DbContext
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
        public DbSet<Villa> Villas { get; set; } // <- Villas tak bedzie nazywac sie tabela

        // przeciaze metoda dzieki ktorj mozna zapelnic DB dowolnymi danymi
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            /*
            modelBuilder.Entity<Villa>().HasData(
                new Villa()
                {
                    Id = 1,
                    Name = "Name",
                    Rate = 100,
                    Details = "dd",
                    ImageUrl = "2",
                    CreateDate = DateTime.Now,
                    UpdateDate = DateTime.Now,
                }
                );
            */
        }
    }
}
