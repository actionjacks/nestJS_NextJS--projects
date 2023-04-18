using Core.Models;
using Microsoft.EntityFrameworkCore;

namespace Core.Infrastructure
{
    public class SeedData
    {
        public static void SeedDatase(DataContext context)
        {
            context.Database.Migrate();

            if (context.Products.Count() == 0 && context.Categories.Count() == 0)
            {
                Category fruits = new Category { Name = "fruits" };
                Category shirts = new Category { Name = "shirts" };

                context.Products.AddRange(
                    new Product
                    {
                        Name = "Apples",
                        Price = 150M,
                        Category = fruits
                    },
                    new Product
                    {
                        Name = "Apples",
                        Price = 150M,
                        Category = fruits
                    },
                    new Product
                    {
                        Name = "Lemon",
                        Price = 250M,
                        Category = fruits
                    },
                    new Product
                    {
                        Name = "Watermelon",
                        Price = 15M,
                        Category = fruits
                    },
                    new Product
                    {
                        Name = "Grapefruit",
                        Price = 8M,
                        Category = fruits
                    },
                    new Product
                    {
                        Name = "Black shirt",
                        Price = 181M,
                        Category = shirts
                    },
                    new Product
                    {
                        Name = "Red shirt",
                        Price = 99M,
                        Category = shirts
                    },
                    new Product
                    {
                        Name = "Yellow shirt",
                        Price = 402M,
                        Category = shirts
                    }
                );
                context.SaveChanges();
            }
        }
    }
}
