const canvas = document.getElementById("jsCanvas");

let painting = false;

function stopPainting() {
  painting;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
}

function onMouseDown(event) {
  painting = true;
}
function onmouseup(event) {
  stopPainting();
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", onmouseup);
  canvas.addEventListener("mouseleave", stopPainting);
}
