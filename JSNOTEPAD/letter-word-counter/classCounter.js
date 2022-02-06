class CountLettersOrWords {
  constructor() {
    this.textToCount = null;
    this.searchInput = null;
    this.counterBtn = null;
    this.countedLetters = null;
    this.countedWords = null;
    //selectors
    this.UiSelectors = {
      textToCount: ".counter__textToCount",
      searchInput: ".counter__lettersOrWords",
      counterBtn: ".counter__btn",
      countedLetters: ".countedLetters",
      countedWords: ".countedWords",
    };
  }
  countLettersOrWords(counterElement, whatToCount = "") {
    let counterValue = 0;
    let text = [];

    switch (whatToCount) {
      case "letters":
        text = [...this.textToCount.value.split("")];
        text.forEach((item) => {
          if (item === this.searchInput.value) {
            counterValue++;
          }
          return (counterElement.innerHTML = counterValue);
        });
        break;

      case "words":
        text = [...this.textToCount.value.split(" ")];
        text.forEach((item) => {
          if (item === this.searchInput.value) {
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

  countLetters = (e) => {
    e.preventDefault();
    if (this.textToCount.value !== "") {
      this.countLettersOrWords(this.countedLetters, "letters");
      this.countLettersOrWords(this.countedWords, "words");
    }
  };

  initialize() {
    //set html elements
    this.textToCount = document.querySelector(this.UiSelectors.textToCount);
    this.searchInput = document.querySelector(this.UiSelectors.searchInput);
    this.counterBtn = document.querySelector(this.UiSelectors.counterBtn);
    this.countedLetters = document.querySelector(
      this.UiSelectors.countedLetters
    );
    this.countedWords = document.querySelector(this.UiSelectors.countedWords);
    //add listener
    this.counterBtn.addEventListener("click", this.countLetters);
  }
}
