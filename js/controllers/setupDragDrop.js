import {
  propertiesStickers,
  setItemsLocalStorageStickers,
} from "./add-new-stick";

let dragSrcEl;
let items;

export function eventDragStartAndDragEnd() {
  items = document.querySelectorAll(".container .box");

  items.forEach(function (item) {
    item.removeEventListener("dragstart", handleDragStart);
    item.removeEventListener("dragover", handleDragOver);
    item.removeEventListener("dragenter", handleDragEnter);
    item.removeEventListener("dragleave", handleDragLeave);
    item.removeEventListener("dragend", handleDragEnd);
    item.removeEventListener("drop", handleDrop);

    item.addEventListener("dragstart", handleDragStart);
    item.addEventListener("dragover", handleDragOver);
    item.addEventListener("dragenter", handleDragEnter);
    item.addEventListener("dragleave", handleDragLeave);
    item.addEventListener("dragend", handleDragEnd);
    item.addEventListener("drop", handleDrop);
  });
}

function handleDragStart(e) {
  this.style.opacity = "0.4";

  dragSrcEl = e.srcElement;

  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/html", this.innerHTML);
  e.dataTransfer.color = "orangered";
}

function handleDragEnd(e) {
  this.style.opacity = "1";

  items.forEach(function (item) {
    item.classList.remove("over");
  });
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }

  return false;
}

function handleDragEnter(e) {
  this.classList.add("over");
}

function handleDragLeave(e) {
  this.classList.remove("over");
}

function handleDrop(e) {
  e.stopPropagation();
  e.preventDefault();

  let colorStickerData = dragSrcEl.dataset.color;
  console.log(colorStickerData, "probando color");

  if (dragSrcEl !== this) {
    dragSrcEl.innerHTML = this.innerHTML;

    dragSrcEl.style.backgroundColor = colorStickerData;

    this.innerHTML = e.dataTransfer.getData("text/html");
    console.log(dragSrcEl, "dragSrcEl");
  }

  readAllStickersLoaded();
  return false;
}

function readAllStickersLoaded() {
  stickersList = [];
  items.forEach((item) => {
    let newSticker = {
      id: item.id,
      value: item.innerText,
      color: item.dataset.color,
    };

    stickersList.push(newSticker);

    setItemsLocalStorageStickers(stickersList);
  });
}
