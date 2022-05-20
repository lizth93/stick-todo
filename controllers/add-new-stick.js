import { eventDragStartAndDragEnd } from "./setupDragDrop.js";

let button = document.querySelector(".btn--form");
let items = document.querySelector(".container");
let sticks;

export function createNewStick() {
  button.addEventListener("click", function (e) {
    e.preventDefault();

    let stickNew = document.querySelector(".create-text-area").value;
    let newElement = document.createElement("div");
    newElement.setAttribute("draggable", "true");
    newElement.setAttribute("class", "box");
    newElement.setAttribute("id", getIdNumber());

    items.insertAdjacentElement("beforeend", newElement).append(stickNew);
    document.querySelector(".create-text-area").value = "";
  });
}

export function getIdNumber() {
  let idHigest = 0;

  sticks = document.querySelectorAll(".container .box");
  sticks.forEach(function (stick) {
    if (idHigest < Number(stick.id)) {
      idHigest = Number(stick.id);
    }
  });
  return setIdNumberInTheLabel(idHigest);
}

function setIdNumberInTheLabel(idHigest) {
  let idNumber = Number(document.querySelector(".id-number").textContent);

  idNumber = idHigest + 1;

  document.querySelector(".id-number").textContent = idNumber;

  return idNumber;
}

export function init() {
  getIdNumber();
  createNewStick();
  eventDragStartAndDragEnd();
}
