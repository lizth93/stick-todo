import { getStickers } from "./stickers-view";

let draggedSticker;
let stickers;
let handler;

export function onDragAndDropEnd(_handler) {
  handler = _handler;
  stickers = getStickers();
  stickers.forEach(function (x) {
    x.removeEventListener("dragstart", handleDragStart);
    x.removeEventListener("dragover", handleDragOver);
    x.removeEventListener("dragenter", handleDragEnter);
    x.removeEventListener("dragleave", handleDragLeave);
    x.removeEventListener("dragend", handleDragEnd);
    x.removeEventListener("drop", handleDrop);

    x.addEventListener("dragstart", handleDragStart);
    x.addEventListener("dragover", handleDragOver);
    x.addEventListener("dragenter", handleDragEnter);
    x.addEventListener("dragleave", handleDragLeave);
    x.addEventListener("dragend", handleDragEnd);
    x.addEventListener("drop", handleDrop);
  });
}

function handleDragStart(e) {
  draggedSticker = e.srcElement;
  draggedSticker.style.opacity = "0.4";
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }

  return false;
}

function handleDragEnter() {
  this.classList.add("over");
}

function handleDragLeave() {
  this.classList.remove("over");
}

function handleDragEnd() {
  this.style.opacity = "1";

  stickers.forEach(function (x) {
    x.classList.remove("over");
  });
}

function handleDrop(e) {
  e.stopPropagation();
  e.preventDefault();

  let srcColor = draggedSticker.dataset.color;
  let srcText = draggedSticker.querySelector(".text-content").innerHTML;

  if (draggedSticker !== this) {
    draggedSticker.innerHTML = this.innerHTML;
    draggedSticker.style.backgroundColor = this.dataset.color;
    draggedSticker.dataset.color = this.dataset.color;

    this.innerHTML = srcText;
    this.style.backgroundColor = srcColor;
    this.dataset.color = srcColor;
  }

  handler(
    [...stickers].map((x) => ({
      id: x.id,
      value: x.innerText,
      color: x.dataset.color,
      status: "active",
    }))
  );

  return false;
}
