class Parallaxa {
  constructor() {
    //selectors
    this.topNav = null;

    this.UiSelectors = {
      topNav: "Navigation-wrapper",
    };
  }
  initialize() {
    //get elements
    this.topNav = document.getElementById(this.UiSelectors.topNav);

    this.addEventListener();
  }

  addEventListener() {
    document.addEventListener("scroll", () => this.navHandle());
  }

  navHandle() {
    if (window.scrollY > 100) {
      return;
    }
    setTimeout(() => {
      if (window.scrollY > 0) {
        this.topNav.classList.remove("headroom-top");
        this.topNav.classList.add("headroom-not-top");
        setTimeout(() => {
          this.topNav.classList.add("slide-down");
        }, 500);
      } else {
        this.topNav.classList.remove("headroom-not-top");
        this.topNav.classList.add("headroom-top");
        setTimeout(() => {
          this.topNav.classList.remove("slide-down");
        }, 1000);
      }
    }, 600);
  }

  toggleClassElements(...elements) {
    elements.forEach((element) => element.classList.toggle("hide"));
  }
}

start = new Parallaxa();
start.initialize();
