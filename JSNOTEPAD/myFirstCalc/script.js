const calc = new calcLogic();

const operants = [...document.querySelectorAll(".operant")];
const numbers = [...document.querySelectorAll(".number")];
const screen = document.querySelector(".calcScreen");
const equation = document.querySelector(".equation");
const clear = document.querySelector(".clear");

let number1 = "";
let number2 = "";
let action = "";

clear.addEventListener("click", () => {
  number1 = "";
  number2 = "";
  action = "";
  screen.innerHTML = "";
});

operants.forEach((item) => {
  item.addEventListener("click", function (e) {
    const targetId = e.target.id;
    action = targetId;
    screen.innerHTML = "";
    console.log(action);
  });
});

numbers.forEach((item) => {
  item.addEventListener("click", function (e) {
    if (action === "") {
      const targetId = e.target.id;
      number1 += targetId;
      screen.innerHTML = number1;
      console.log(number1);
    }
    if (action !== "") {
      const targetId = e.target.id;
      number2 += targetId;
      screen.innerHTML = number2;
      console.log(number2);
    }
  });
});

equation.addEventListener("click", () => {
  if (action === "+") {
    screen.innerHTML = calc.addition(parseInt(number1), parseInt(number2));
  }
  if (action === "-") {
    screen.innerHTML = calc.subtraction(parseInt(number1), parseInt(number2));
  }
  if (action === "*") {
    screen.innerHTML = calc.multiplication(
      parseInt(number1),
      parseInt(number2)
    );
  }
  if (action === "/") {
    screen.innerHTML = calc.division(parseInt(number1), parseInt(number2));
  }
});
