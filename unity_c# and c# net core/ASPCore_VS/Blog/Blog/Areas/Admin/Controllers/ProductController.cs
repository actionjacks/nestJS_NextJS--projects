using Blog.Models;
using Blog.Models.ViewModels;
using Blog.Repository.IRepository;
using Blog.Utility;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Data;

/*
 * controller use _Repository
 */
namespace Blog.Areas.Admin.Controllers
{
    [Area("Admin")]
    [Authorize(Roles = SD.Role_Admin)]
    public class ProductController : Controller
    {
        // private readonly ICategoryRepository _categoryRepository;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IWebHostEnvironment _webHostEnvironment;
        public ProductController(IUnitOfWork unitOfWork, IWebHostEnvironment webHostEnvironment)
        {
            _unitOfWork = unitOfWork;
            _webHostEnvironment = webHostEnvironment;
        }
        public IActionResult Index()
        {
            // IEnumerable<Products> objCategoryList = _categoryRepository.GetAll();
            IEnumerable<Products> objProductsList = _unitOfWork.Products
                .GetAll(includeProperties: "Category").ToList();
            return View(objProductsList);
        }
        /* Create new category
        public IActionResult Create()
        {
            //can use viewbag
            IEnumerable<SelectListItem> CategoryList = _unitOfWork.Category.GetAll()
                .Select(c => new SelectListItem
                {
                    Text = c.Name,
                    Value = c.Id.ToString()
                }); // this need for dropdown select from product related category
            // ViewBag.CategoryList = CategoryList;
            // ViewData["CategoryList"] = CategoryList;

            ProductVM productVM = new()
            {
                CategoryList = CategoryList,
                Product = new Products()
            };
            return View(productVM);
        }
        */ //upsert  -update or create(insert)
        public IActionResult Upsert(int? id)
        {
            IEnumerable<SelectListItem> CategoryList = _unitOfWork.Category.GetAll()
                .Select(c => new SelectListItem
                {
                    Text = c.Name,
                    Value = c.Id.ToString()
                });

            ProductVM productVM = new()
            {
                CategoryList = CategoryList,
                Product = new Products()
            };
            if (id == null || id == 0)
            { // create if no id
                return View(productVM);
            }
            productVM.Product = _unitOfWork.Products.Get(pro => pro.Id == id); // get return first element found
            // UPDATE id id
            return View(productVM);
        }
        /*
        [HttpPost]
        public IActionResult Create(ProductVM prodToSave)
        {
            if (!ModelState.IsValid)
            {
                return View();
            }
            _unitOfWork.Products.Add(prodToSave.Product);
            _unitOfWork.Save();
            TempData["success"] = "Product created successfully";
            return RedirectToAction("Index");
        }
        */
        [HttpPost]
        public IActionResult Upsert(ProductVM prodToSave, IFormFile? file)
        {
            if (!ModelState.IsValid)
            {
                return View();
            }
            string wwwRootPath = _webHostEnvironment.WebRootPath;
            if (file != null)
            {
                string fileName = Guid.NewGuid().ToString() + Path.GetExtension(file.FileName);
                string productPath = Path.Combine(wwwRootPath, @"images\product");

                if (!string.IsNullOrEmpty(prodToSave.Product.ImageUrl))
                {
                    // delete the old image for update
                    var oldImagePath =
                        Path.Combine(wwwRootPath, prodToSave.Product.ImageUrl.TrimStart('\\'));

                    if (System.IO.File.Exists(oldImagePath))
                    {
                        System.IO.File.Delete(oldImagePath);
                    }
                }
                // upload new image
                using (var fileStream = new FileStream(Path.Combine(productPath, fileName), FileMode.Create))
                {
                    file.CopyTo(fileStream);
                };
                prodToSave.Product.ImageUrl = @"\images\product\" + fileName;
            }
            // if the product has an id, it means that it is present in the database
            if (prodToSave.Product.Id == 0)
            {
                // create new
                _unitOfWork.Products.Add(prodToSave.Product);
            }
            else
            {
                // update
                _unitOfWork.Products.Update(prodToSave.Product);
            }

            _unitOfWork.Save();
            TempData["success"] = "Product created successfully";
            return RedirectToAction("Index");
        }

        /* Edit Category
        public IActionResult Edit(int? id)
        {
            if (id == null || id == 0)
            {
                return NotFound();
            }
            Products? prodegoryById = _unitOfWork.Products.Get(prod => prod.Id == id);

            if (prodegoryById == null)
            {
                return NotFound();
            }
            return View(prodegoryById);
        }
        */
        /*
        [HttpPost]
        public IActionResult Edit(Products prodToSave)
        {
            if (!ModelState.IsValid)
            {
                return View();
            }
            _unitOfWork.Products.Update(prodToSave);
            _unitOfWork.Save();
            TempData["success"] = "Product edited successfully";
            return RedirectToAction("Index");
        }
        */
        // Delete Products
        public IActionResult Delete(int? id)
        {
            if (id == null || id == 0)
            {
                return NotFound();
            }
            Products? productById = _unitOfWork.Products.Get(prod => prod.Id == id);

            if (productById == null)
            {
                return NotFound();
            }
            return View(productById);
        }
        [HttpPost, ActionName("Delete")]
        public IActionResult DeletePOST(int? id)
        {
            Products? productToDelete = _unitOfWork.Products.Get(prod => prod.Id == id);
            if (productToDelete == null)
            {
                return NotFound();
            }
            var oldImagePath =
                        Path.Combine(_webHostEnvironment.WebRootPath, productToDelete.ImageUrl.TrimStart('\\'));

            if (System.IO.File.Exists(oldImagePath))
            {
                System.IO.File.Delete(oldImagePath);
            }
            _unitOfWork.Products.Delete(productToDelete);
            _unitOfWork.Save();
            TempData["success"] = "Product deleted successfully";
            return RedirectToAction("Index");
        }
    }
}
