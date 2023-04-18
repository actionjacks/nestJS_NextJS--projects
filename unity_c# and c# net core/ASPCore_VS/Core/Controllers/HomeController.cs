using Core.Infrastructure;
using Core.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Core.Controllers
{
    public class HomeController : Controller
    {
        private DataContext _context;
        public HomeController(DataContext context)
        {
            _context = context;
        }

        // route http://localhost:3000/?id=1
        public async Task<IActionResult> Index(long id)
        {
            Product? product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return View(null);
            }
            // return View(product);
            // overload method to difrent  view
            // return View("Fruit", await _context.Products.FindAsync(id)); // it will go to views -> Frouts.cshtml file
            return View("Index", await _context.Products.FindAsync(id)); // it will go to views -> Frouts.cshtml file

        }

        // http://localhost:3000/home/Common
        public IActionResult Common(long id)
        {
            return View();
        }

        // http://localhost:3000/home/List
        public async Task<IActionResult> List()
        {
            // ViewBag Object to hold value visible in view
            ViewBag.AvergePrice = await _context.Products.AverageAsync(p => p.Price);
            return View(await _context.Products.ToListAsync());
        }

        // http://localhost:3000/home/Redirect
        public IActionResult Redirect()
        {
            TempData["value"] = "TempData value";
            return RedirectToAction("Index", new { id = 1 });
        }

        // http://localhost:3000/home/Html
        public IActionResult Html()
        {
            return View((object)"This is a <h3><i>string</i></h3>");
        }
    }
}
