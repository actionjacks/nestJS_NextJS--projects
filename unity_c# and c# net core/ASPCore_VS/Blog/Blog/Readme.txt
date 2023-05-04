## https://www.tiny.cloud/tinymce/

## config dbconnection

## add class
`
using Microsoft.EntityFrameworkCore;

namespace Blog.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
    }
}
`

## register service in Program.cs
`
// pass created class
builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    // connection string 
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});
`

`
  "ConnectionStrings": {
    "DefaultConnection": "Data Source=(localdb)\\MSSQLLocalDB;Database=TurboBlog;Initial Catalog=master;Integrated Security=True;Connect Timeout=30;Encrypt=False;Trust Server Certificate=False;Application Intent=ReadWrite;Multi Subnet Failover=False"
  }
`

## open packages console 

`
~Update-Database
`

## in ApplicationDbContext add
`
...
public DbSet<Category> Categories { get; set; } // this create SQL table Categories
...
`

## open packages console 

`
~Add-Migration <name>
~Update-Databse
`
