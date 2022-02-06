const questions = {
  firstQuestion: {
    question: "blach blach 1",
    answer1: "answer 1",
    answer2: "answer 2",
    answer3: "answer 3",
  },
  secondQuestion: {
    question: "blach blach 2",
    answer1: "answer 1",
    answer2: "answer 2",
    answer3: "answer 3",
  },
  thirdQuestion: {
    question: "blach blach 3",
    answer1: "answer 1",
    answer2: "answer 2",
    answer3: "answer 3",
  },
};
let questionNumber = 1;

//answers points
let red = 0;
let green = 0;
let blue = 0;

function Render(questionNumber) {
  if (questionNumber === 1) {
    contentQuestion.innerHTML = questions.firstQuestion.question;
    document.querySelector(".answer1").innerHTML =
      questions.firstQuestion.answer1;
    document.querySelector(".answer2").innerHTML =
      questions.firstQuestion.answer2;
    document.querySelector(".answer3").innerHTML =
      questions.firstQuestion.answer3;
  }
  if (questionNumber === 2) {
    contentQuestion.innerHTML = questions.secondQuestion.question;
    document.querySelector(".answer1").innerHTML =
      questions.secondQuestion.answer1;
    document.querySelector(".answer2").innerHTML =
      questions.secondQuestion.answer2;
    document.querySelector(".answer3").innerHTML =
      questions.secondQuestion.answer3;
  }
  if (questionNumber === 3) {
    contentQuestion.innerHTML = questions.thirdQuestion.question;
    document.querySelector(".answer1").innerHTML =
      questions.thirdQuestion.answer1;
    document.querySelector(".answer2").innerHTML =
      questions.thirdQuestion.answer2;
    document.querySelector(".answer3").innerHTML =
      questions.thirdQuestion.answer3;
  }
}

const mainPanel = document.querySelector("div.main ");
const contentQuestion = document.querySelector(".question");

mainPanel.addEventListener("click", (event) => {
  const { target } = event;

  if (target.classList.contains("answer1")) {
    console.log(target);
    if (questionNumber === 1) {
      red++;
      questionNumber++;
      Render(2);
      return;
    }
    if (questionNumber === 2) {
      blue++;
      questionNumber++;
      Render(3);
      return;
    }
  }
  if (target.classList.contains("answer2")) {
    console.log(target);
    if (questionNumber === 1) {
      green++;
      questionNumber++;
      Render(2);
      return;
    }
    if (questionNumber === 2) {
      green++;
      questionNumber++;
      Render(3);
      return;
    }
  }
  if (target.classList.contains("answer3")) {
    console.log(target);
    if (questionNumber === 1) {
      blue++;
      questionNumber++;
      Render(2);
      return;
    }
    if (questionNumber === 2) {
      red++;
      questionNumber++;
      Render(3);
      return;
    }
  }
});

Render(1);
