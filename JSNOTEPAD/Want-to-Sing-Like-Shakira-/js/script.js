class ShakiraShakira {
  constructor() {
    this.keys = null;

    this.UiSelectors = {
      keys: ".key",
    };
  }

  initialize() {
    window.addEventListener("keydown", this.playSound.bind(this));
    this.keys = document.querySelectorAll(this.UiSelectors.keys);
    this.keysListener(this.keys);
  }

  playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
  }

  removeTransition(e) {
    if (e.propertyName !== "transform") return;
    e.target.classList.remove("playing");
  }

  keysListener(keys) {
    keys.forEach((key) => {
      key.addEventListener("transitionend", this.removeTransition.bind(this));
    });
  }
}
