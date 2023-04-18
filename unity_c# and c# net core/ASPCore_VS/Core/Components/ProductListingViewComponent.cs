using Core.Infrastructure;
using Core.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Core.Components
{
    // [ViewComponent(Name = "myname")]
    public class ProductListingViewComponent : ViewComponent
    {
        private DataContext _dataContext;
        public IEnumerable<Product> Products { get; set; }

        public ProductListingViewComponent(DataContext dataContext)
        {
            _dataContext = dataContext;
        }
        /*
        public string Invoke()
        {
            return $"there are {_dataContext.Products.Count()} produccts";
        }
        */
        public IViewComponentResult Invoke()
        {
            // return new HtmlContentViewComponentResult(new HtmlString("<h2>foo</h2>"));
            return View(_dataContext.Products.Include(p => p.Category).ToList());
        }
    }
}
