using Blog.Models;
using Blog.Repository.IRepository;
using Blog.Utility;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

/*
 * controller use _Repository
 */
namespace Blog.Areas.Admin.Controllers
{
    [Area("Admin")]
    [Authorize(Roles = SD.Role_Admin)]
    public class CategoryController : Controller
    {
        // private readonly ICategoryRepository _categoryRepository;
        private readonly IUnitOfWork _unitOfWork;
        public CategoryController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public IActionResult Index()
        {
            // IEnumerable<Category> objCategoryList = _categoryRepository.GetAll();
            IEnumerable<Category> objCategoryList = _unitOfWork.Category.GetAll().ToList();

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

            _unitOfWork.Category.Add(catToSave);
            _unitOfWork.Save();
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
            Category? categoryById = _unitOfWork.Category.Get(cat => cat.Id == id);

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
            _unitOfWork.Category.Update(catToSave);
            _unitOfWork.Save();
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
            Category? categoryById = _unitOfWork.Category.Get(cat => cat.Id == id);

            if (categoryById == null)
            {
                return NotFound();
            }
            return View(categoryById);
        }
        [HttpPost, ActionName("Delete")]
        public IActionResult DeletePOST(int? id)
        {
            Category? categoryToDelete = _unitOfWork.Category.Get(cat => cat.Id == id);
            if (categoryToDelete == null)
            {
                return NotFound();
            }
            _unitOfWork.Category.Delete(categoryToDelete);
            _unitOfWork.Save();
            TempData["success"] = "Category deleted successfully";
            return RedirectToAction("Index");
        }
    }
}
