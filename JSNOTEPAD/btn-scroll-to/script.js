const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");

const element1 = document.querySelector(".element1");
const element2 = document.querySelector(".element2");
const element3 = document.querySelector(".element3");
const element4 = document.querySelector(".element4");

function offset(element) {
  const rect = element.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}
const element1Offset = offset(element1);
const element2Offset = offset(element2);
const element3Offset = offset(element3);
const element4Offset = offset(element4);

btn1.addEventListener("click", () => {
  element1.scrollIntoView({
    behavior: "smooth",
  });
});
btn2.addEventListener("click", () => {
  element2.scrollIntoView({
    behavior: "smooth",
  });
});
btn3.addEventListener("click", () => {
  element3.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center",
  });
});
btn4.addEventListener("click", () => {
  element4.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center",
  });
});

document.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  console.log(
    `scroll position from top ${scrollPosition}`,
    `element2 position from top ${element2Offset.top}`
  );
  if (
    scrollPosition > element2Offset.top &&
    scrollPosition < element3Offset.top
  ) {
    console.log("! scroll is on element2 !");
  }
});
