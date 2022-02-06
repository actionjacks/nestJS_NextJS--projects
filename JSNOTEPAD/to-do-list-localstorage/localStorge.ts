interface TodoSelectors {
  taskInputSelector: string;
  submitSelector: string;
  searchSelector: string;
  taskcontentSelector: string;
}
export class LocalStorgeTodo implements TodoSelectors {
  public toDoArray: string[];

  public taskInputSelector: string;
  public submitSelector: string;
  public searchSelector: string;
  public taskcontentSelector: string;

  public taskInput: any;
  public submitBtn: any;
  public searchInput: any;
  public tasks: any; //HTMLElement

  public closeElements: any[];
  public parentElement: HTMLElement;

  constructor(
    taskInputSelector: string,
    submitSelector: string,
    searchSelector: string,
    taskcontentSelector: string
  ) {
    this.taskInputSelector = taskInputSelector;
    this.submitSelector = submitSelector;
    this.searchSelector = searchSelector;
    this.taskcontentSelector = taskcontentSelector;
  }

  initialize(): void {
    const taskInput = document.querySelector(this.taskInputSelector);
    const submitBtn = document.querySelector(this.submitSelector);
    const searchInput = document.querySelector(this.searchSelector);
    const tasks = document.querySelector(this.taskcontentSelector);

    this.taskInput = taskInput;
    this.submitBtn = submitBtn;
    this.searchInput = searchInput;
    this.tasks = tasks;

    this.toDoArray = [];
    this.closeElements = [];

    this.getLocalStorge();
    this.addListener();
    console.log(this.taskInput);
  }

  getLocalStorge(): void {
    if (localStorage.getItem("todos") !== null) {
      const data: string = JSON.parse(localStorage.getItem("todos"));
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        this.toDoArray.push(data[i]);
        console.log(this.toDoArray);
      }
      for (const item of this.toDoArray) {
        const liElement = document.createElement("li");
        liElement.innerHTML = `${item}`;
        this.tasks.append(liElement);
      }
      this.listnerToRemove();
    }
  }

  addListener(): void {
    this.submitBtn.addEventListener("click", this.submitTask);
    this.searchInput.addEventListener("keyup", this.searchList);
  }

  submitTask = (): void => {
    const inputValue = this.taskInput.value;
    if (inputValue !== "") {
      this.createTask(inputValue);
      this.taskInput.value = "";
      this.pushToArray();
      this.listnerToRemove();
      this.saveToLocalStorge();
    }
  };

  searchList = (): void => {
    const search = this.searchInput.value;
    console.log(search);
    const lis = [...document.querySelectorAll("li")];
    for (let li of lis) {
      let item = li.innerHTML;
      if (item.indexOf(search) === -1) {
        li.classList.add("hide");
      } else {
        li.classList.remove("hide");
      }
    }
  };

  createTask(inputValue): void {
    const liElement = document.createElement("li");
    liElement.innerHTML = `${inputValue} `;
    this.tasks.append(liElement);

    const iElement = document.createElement("i");
    iElement.className += ` close fas fa-trash-alt`;
    liElement.append(iElement);
  }

  pushToArray = (): void => {
    this.toDoArray = [];
    const liElements = [...document.getElementsByTagName("li")];
    liElements.forEach((i) => {
      const value = i.innerHTML;
      this.toDoArray.push(value);
    });
  };

  listnerToRemove(): void {
    this.closeElements = [...document.querySelectorAll(".close")];
    console.log(this.closeElements);
    this.closeElements.forEach((i) => {
      i.addEventListener("click", this.removeTask, true);
      i.addEventListener(
        "click",
        () => {
          this.pushToArray();
          this.saveToLocalStorge();
        },
        true
      );
    });
  }

  removeTask(): void {
    this.parentElement.remove();
  }

  saveToLocalStorge(): void {
    localStorage.setItem("todos", JSON.stringify(this.toDoArray));
  }
}

const localStorgeTodo = new LocalStorgeTodo(
  "[data-add]",
  "[data-button]",
  "[data-search]",
  "[data-taskcontent]"
);

localStorgeTodo.initialize();
