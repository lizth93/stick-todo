let items = document.querySelectorAll(".container .box");
let dragSrcEl;

export function eventDragStartAndDragEnd() {
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
eventDragStartAndDragEnd();

// document.addEventListener("DOMContentLoaded", (event) => {
function handleDragStart(e) {
  this.style.opacity = "0.4";

  dragSrcEl = e.srcElement;

  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/html", this.innerHTML);
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
  e.stopPropagation(); // stops the browser from redirecting.
  e.preventDefault();

  if (dragSrcEl !== this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData("text/html");
  }
  return false;
}

// });
