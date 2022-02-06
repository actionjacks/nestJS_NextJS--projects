//MOBILE

const state = {
  mousedown: false,
};

const lineWidth = 2;
const strokeStyle = null;

function handleWritingStart(event) {
  event.preventDefault();

  const mousePos = getMosuePositionOnCanvas(event);

  ctx.beginPath();
  ctx.moveTo(mousePos.x, mousePos.y);

  ctx.lineWidth = lineWidth;
  ctx.fill();
  state.mousedown = true;
}

function handleWritingInProgress(event) {
  event.preventDefault();
  if (state.mousedown) {
    const mousePos = getMosuePositionOnCanvas(event);
    ctx.lineTo(mousePos.x, mousePos.y);
    //rainbow color
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    hue++;
    if (hue >= 360) {
      hue = 0;
    }
    ctx.stroke();
  }
}

function handleDrawingEnd(event) {
  event.preventDefault();

  if (state.mousedown) {
    ctx.stroke();
  }
  IGiveUMyRating();
  state.mousedown = false;
}

function getMosuePositionOnCanvas(event) {
  const clientX = event.touches[0].clientX;
  const clientY = event.touches[0].clientY;
  const { offsetLeft, offsetTop } = event.target;
  const canvasX = clientX - offsetLeft;
  const canvasY = clientY - offsetTop;

  return { x: canvasX, y: canvasY };
}

canvas.addEventListener("touchstart", handleWritingStart);
canvas.addEventListener("touchmove", handleWritingInProgress);
canvas.addEventListener("touchend", handleDrawingEnd);
