class BobRoss {
  constructor(selector) {
    this.selector = selector;

    this.canvas = null;
    this.ctx = null;
    this.isDrawing = null;
    this.lastX = null;
    this.lastY = null;
    this.hue = null;
    this.direction = null;
  }

  initialize = () => {
    this.canvas = document.getElementById(this.selector);
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = window.innerWidth - 20;
    this.canvas.height = window.innerHeight - 20;

    this.ctx.strokeStyle = "#BADA55";
    this.ctx.lineJoin = "round";
    this.ctx.lineCap = "round";
    this.ctx.lineWidth = 100;

    this.isDrawing = false;
    this.lastX = 0;
    this.lastY = 0;
    this.hue = 0;
    this.direction = true;

    this.canvas.addEventListener("mousemove", (e) => this.draw(e));
    this.canvas.addEventListener("mouseup", () => (this.isDrawing = false));
    this.canvas.addEventListener("mouseout", () => (this.isDrawing = false));
    this.canvas.addEventListener("mousedown", (e) => {
      this.isDrawing = true;
      [this.lastX, this.lastY] = [e.offsetX, e.offsetY];
    });
  };

  draw(e) {
    if (!this.isDrawing) return;
    this.ctx.strokeStyle = `hsl(${this.hue}, 100%, 50%)`;
    this.ctx.beginPath();

    this.ctx.moveTo(this.lastX, this.lastY);

    this.ctx.lineTo(e.offsetX, e.offsetY);
    this.ctx.stroke();
    [this.lastX, this.lastY] = [e.offsetX, e.offsetY];

    this.hue++;
    if (this.hue >= 360) {
      this.hue = 0;
    }
    if (this.ctx.lineWidth >= 100 || this.ctx.lineWidth <= 15) {
      this.direction = !this.direction;
    }
    if (this.direction) {
      this.ctx.lineWidth++;
    } else {
      this.ctx.lineWidth--;
    }
  }
}

const bobRoss = new BobRoss("draw");
bobRoss.initialize();
