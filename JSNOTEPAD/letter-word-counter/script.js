const textToCount = document.querySelector(".counter__textToCount");
const searchInput = document.querySelector(".counter__lettersOrWords");
const counterBtn = document.querySelector(".counter__btn");
//containers for counters
const countedLetters = document.querySelector(".countedLetters");
const countedWords = document.querySelector(".countedWords");

function countLettersOrWords(counterElement, whatToCount = "") {
  let counterValue = 0;
  let text = [];

  switch (whatToCount) {
    case "letters":
      text = [...textToCount.value.split("")];
      text.forEach((item) => {
        if (item === searchInput.value) {
          counterValue++;
        }
        return (counterElement.innerHTML = counterValue);
      });
      break;

    case "words":
      text = [...textToCount.value.split(" ")];
      text.forEach((item) => {
        if (item === searchInput.value) {
          counterValue++;
        }
        return (counterElement.innerHTML = counterValue);
      });
      break;

    default:
      console.error(
        "required value 'words' or 'letters' as the second parameter"
      );
  }
}
const countLetters = (e) => {
  e.preventDefault();

  if (textToCount.value !== "") {
    countLettersOrWords(countedLetters, "letters");
    countLettersOrWords(countedWords, "words");
  }
};

counterBtn.addEventListener("click", countLetters);
