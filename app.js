const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const color = document.querySelectorAll(".jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const save = document.getElementById("jsSave");

const INITIAL_COLOR = "#2c2c2c";

canvas.width = document.getElementsByClassName("canvas")[0].offsetWidth;
canvas.height = document.getElementsByClassName("canvas")[0].offsetHeight;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = INITIAL_COLOR;
ctx.strokeStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

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
  if (filling === false) {
    filling = true;
    mode.innerText = "Paint";
  } else {
    filling = false;
    mode.innerText = "Fill";
  }
}
function handleClickCanvas() {
  if (filling) {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}
function handleCM(event) {
  event.preventDefault();
}
function handleSaveBtn() {
  const link = document.createElement("a");
  link.href = canvas.toDataURL();
  link.download = "painJS[]";
  link.click();
}
if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleClickCanvas);
  canvas.addEventListener("contextmenu", handleCM);
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

save.addEventListener("click", handleSaveBtn);
