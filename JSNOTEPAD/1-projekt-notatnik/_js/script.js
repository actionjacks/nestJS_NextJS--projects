const menu__title = document.querySelectorAll(".menu__title");

function classToggler() {
  if (this.classList.contains("redux")) {
    document.querySelector(".menu__container-redux").classList.toggle("show");
  }
}

menu__title.forEach((item) => {
  item.addEventListener("click", classToggler);
});
