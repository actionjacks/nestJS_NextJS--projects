using Blog.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Blog.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
        public DbSet<Category> Categories { get; set; } // this create SQL table Categories
        public DbSet<Products> Products { get; set; }
        public DbSet<ApplicationUser> ApplicationUsers { get; set; }
        //Add starting data 
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder); // <=== need this to use IdentityDbContext

            modelBuilder.Entity<Category>().HasData(
                new Category { Id = 1, Name = "Action", DisplayOrder = 3 },
                new Category { Id = 2, Name = "SciFi", DisplayOrder = 2 },
                new Category { Id = 3, Name = "History", DisplayOrder = 1 }
            );
            modelBuilder.Entity<Products>().HasData(
                new Products
                {
                    Id = 1,
                    Title = "LoremIpsum",
                    Author = "Author lorem",
                    Description = "Description lorem",
                    ISBN = "ISO123",
                    ListPrice = 99,
                    Price = 90,
                    Price50 = 85,
                    Price100 = 80,
                    CategoryId = 1,
                    ImageUrl = ""
                },
                new Products
                {
                    Id = 2,
                    Title = "LoremIpsum2",
                    Author = "Author lorem2",
                    Description = "Description lorem2",
                    ISBN = "ISO123999999",
                    ListPrice = 40,
                    Price = 15,
                    Price50 = 10,
                    Price100 = 5,
                    CategoryId = 2,
                    ImageUrl = ""
                },
                new Products
                {
                    Id = 3,
                    Title = "LoremIpsum3",
                    Author = "Author lorem3",
                    Description = "Description lorem3",
                    ISBN = "33333",
                    ListPrice = 89,
                    Price = 190,
                    Price50 = 185,
                    Price100 = 180,
                    CategoryId = 3,
                    ImageUrl = ""
                },
                new Products
                {
                    Id = 4,
                    Title = "LoremIpsum4",
                    Author = "Author lorem4",
                    Description = "Description lorem4",
                    ISBN = "ISO123",
                    ListPrice = 299,
                    Price = 390,
                    Price50 = 385,
                    Price100 = 380,
                    CategoryId = 3,
                    ImageUrl = ""
                }
            );
        }
    }
}
