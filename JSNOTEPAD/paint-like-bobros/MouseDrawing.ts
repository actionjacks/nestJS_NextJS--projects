// interface CanvasVariables {
//   isDrawing: boolean;
//   direction: boolean;
//   timeFlag: boolean;
//   lastX: number;
//   lastY: number;
//   hue: number;
//   start(): void;
//   draw(e): void;
// }
//implements CanvasVariables
export class MouseDrawing {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  public isDrawing: boolean;
  public timeFlag: boolean;
  public direction: boolean;
  public lastX: number;
  public lastY: number;
  public hue: number;

  constructor(canvasId: string) {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");

    const isDrawing = false;
    const timeFlag = true;
    const direction = true;
    let lastX = 0;
    let lastY = 0;
    let hue = 0;

    this.canvas = canvas;
    this.ctx = ctx;

    this.isDrawing = isDrawing;
    this.timeFlag = timeFlag;
    this.direction = direction;
    this.lastX = lastX;
    this.lastY = lastY;
    this.hue = hue;
  }

  start(): void {
    //setup
    this.ctx.strokeStyle = "#BADA55";
    this.ctx.lineJoin = "round";
    this.ctx.lineCap = "round";
    this.ctx.lineWidth = 100;

    this.canvas.addEventListener("mousemove", (e) => this.draw(e));
    this.canvas.addEventListener("mouseup", () => (this.isDrawing = false));
    this.canvas.addEventListener("mouseout", () => (this.isDrawing = false));
    this.canvas.addEventListener("mousedown", (e) => {
      this.isDrawing = true;
      [this.lastX, this.lastY] = [e.offsetX, e.offsetY];
    });
  }

  draw(e): void {
    if (!this.isDrawing) return;

    this.ctx.strokeStyle = `hsl(${this.hue},100%,50%)`;
    this.ctx.beginPath();
    //start from
    this.ctx.moveTo(this.lastX, this.lastY);
    //go to
    this.ctx.lineTo(e.offsetX, e.offsetY);
    this.ctx.stroke();
    [this.lastX, this.lastY] = [e.offsetX, e.offsetY];

    this.hue++;
    if (this.hue >= 360) this.hue = 0;
    if (this.ctx.lineWidth >= 100 || this.ctx.lineWidth <= 15) {
      this.direction = !this.direction;
    }

    if (this.direction) this.ctx.lineWidth++;
    else this.ctx.lineWidth--;
  }
}
