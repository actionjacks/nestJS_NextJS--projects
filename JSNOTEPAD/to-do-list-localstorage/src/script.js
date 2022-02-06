class toDo {
  constructor() {
    this.toDoArray = [];

    this.taskInput = null;
    this.submitBtn = null;
    this.searchInput = null;
    this.taskcontent = null;

    //selectors
    this.UiSelectors = {
      taskInput: "[data-add]",
      submit: "[data-button]",
      search: "[data-search]",
      taskcontent: "[data-taskcontent]",
    };
  }
  //
  initialize() {
    this.taskInput = document.querySelector(this.UiSelectors.taskInput);
    this.submitBtn = document.querySelector(this.UiSelectors.submit);
    this.searchInput = document.querySelector(this.UiSelectors.search);
    this.tasks = document.querySelector(this.UiSelectors.taskcontent);
    this.getLocalStorge();
    this.addListener();
  }

  getLocalStorge() {
    console.log("get data from local storge");
    if (localStorage.getItem("todos") !== null) {
      const data = JSON.parse(localStorage.getItem("todos"));
      for (let i = 0; i < data.length; i++) {
        this.toDoArray.push(data[i]);
      }
      for (const item of this.toDoArray) {
        const liElement = document.createElement("li");
        liElement.innerHTML = ` ${item} `;
        this.tasks.append(liElement);
      }
      this.listnerToRemove();
    }
  }

  addListener() {
    this.submitBtn.addEventListener("click", this.submitTask);
    this.searchInput.addEventListener("keyup", this.searchList);
  }
  submitTask = () => {
    const taskInputValue = this.taskInput.value;
    if (taskInputValue !== "") {
      this.createTask(taskInputValue);
      this.taskInput.value = "";
      this.pushToArray();
      this.listnerToRemove();
      this.saveToLocalStorge();
    }
  };

  searchList() {
    const search = this.value;
    const lis = [...document.querySelectorAll("li")];
    for (let li of lis) {
      let item = li.innerHTML;
      if (item.indexOf(search) === -1) {
        li.classList.add("hide");
      } else {
        li.classList.remove("hide");
      }
    }
  }

  createTask(taskInputValue) {
    const liElement = document.createElement("li");
    liElement.innerHTML = ` ${taskInputValue} `;
    this.tasks.append(liElement);
    //create remove btn
    const iElement = document.createElement("i");
    iElement.className += ` close fas fa-trash-alt`;
    liElement.append(iElement);
  }

  pushToArray = () => {
    this.toDoArray = [];
    const liElements = [...document.getElementsByTagName("li")];
    liElements.forEach((item) => {
      const value = item.innerHTML;
      this.toDoArray.push(value);
    });
  };

  listnerToRemove() {
    this.closeElements = [...document.querySelectorAll(".close")];
    this.closeElements.forEach((item) => {
      item.addEventListener("click", this.remove, true);
      item.addEventListener(
        "click",
        () => {
          this.pushToArray();
          this.saveToLocalStorge();
        },
        true
      );
    });
  }

  remove() {
    this.parentElement.remove();
  }

  saveToLocalStorge() {
    console.log("save");
    localStorage.setItem("todos", JSON.stringify(this.toDoArray));
  }
}
