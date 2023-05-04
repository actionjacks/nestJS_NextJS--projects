using Blog.Data;
using Blog.Models;
using Microsoft.AspNetCore.Mvc;

/*
 * controller use _context 
 * testo only
 */
namespace Blog.Areas.Admin.Controllers
{
    public class CategoryController__ : Controller
    {
        private readonly ApplicationDbContext _context;
        public CategoryController__(ApplicationDbContext context)
        {
            _context = context;
        }
        public IActionResult Index()
        {
            IEnumerable<Category> objCategoryList = _context.Categories.ToList();
            return View(objCategoryList);
        }
        // Create new category
        public IActionResult Create()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Create(Category catToSave)
        {
            if (catToSave.Name == catToSave.DisplayOrder.ToString())
            {
                ModelState.AddModelError("name", "custom error message order cant be === name");
            }
            if (!ModelState.IsValid)
            {
                return View();
            }
            _context.Categories.Add(catToSave);
            _context.SaveChanges();
            TempData["success"] = "Category created successfully";
            return RedirectToAction("Index");
        }
        // Edit Category
        public IActionResult Edit(int? id)
        {
            if (id == null || id == 0)
            {
                return NotFound();
            }
            Category? categoryById = _context.Categories.Find(id); // only works on primaryKey
            Category? categoryById_1 = _context.Categories.FirstOrDefault(u => u.Id == id);
            Category? categoryById_2 = _context.Categories.Where(u => u.Id == id).FirstOrDefault();

            if (categoryById == null)
            {
                return NotFound();
            }
            return View(categoryById);
        }
        [HttpPost]
        public IActionResult Edit(Category catToSave)
        {
            if (!ModelState.IsValid)
            {
                return View();
            }
            _context.Categories.Update(catToSave);
            _context.SaveChanges();
            TempData["success"] = "Category edited successfully";
            return RedirectToAction("Index");
        }
        // Delete Category
        public IActionResult Delete(int? id)
        {
            if (id == null || id == 0)
            {
                return NotFound();
            }
            Category? categoryById = _context.Categories.Find(id); // only works on primaryKey
            Category? categoryById_1 = _context.Categories.FirstOrDefault(u => u.Id == id);
            Category? categoryById_2 = _context.Categories.Where(u => u.Id == id).FirstOrDefault();

            if (categoryById == null)
            {
                return NotFound();
            }
            return View(categoryById);
        }
        [HttpPost, ActionName("Delete")]
        public IActionResult DeletePOST(int? id)
        {
            Category? categoryToDelete = _context.Categories.Find(id);
            if (categoryToDelete == null)
            {
                return NotFound();
            }
            _context.Categories.Remove(categoryToDelete);
            _context.SaveChanges();
            TempData["success"] = "Category deleted successfully";
            return RedirectToAction("Index");
        }
    }
}
