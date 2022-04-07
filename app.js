const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const color = document.querySelectorAll(".jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

canvas.width = document.getElementsByClassName("canvas")[0].offsetWidth;
canvas.height = document.getElementsByClassName("canvas")[0].offsetHeight;

let painting = false;
let filling = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

// 마우스를 움직이는 내내 발생 //
function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function onMouseDown(event) {
  painting = true;
}

function handleClickColor(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleInputRange(event) {
  ctx.lineWidth = event.target.value;
}

function handleClickMode(event) {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
}
function handleClickCanvas() {
  if (filling) {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}
if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleClickCanvas);
}

Array.from(color).forEach((color) =>
  color.addEventListener("click", handleClickColor)
);

if (range) {
  range.addEventListener("input", handleInputRange);
}

if (mode) {
  mode.addEventListener("click", handleClickMode);
}
