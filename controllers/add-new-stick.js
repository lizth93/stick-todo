import { eventDragStartAndDragEnd } from "./setupDragDrop.js";

let button = document.querySelector(".btn--form");
let container = document.querySelector(".container");

export function createNewStick() {
  button.addEventListener("click", function (e) {
    e.preventDefault();

    let stickNew = document.querySelector(".create-text-area").value;
    let newElement = document.createElement("div");
    newElement.setAttribute("draggable", "true");
    newElement.setAttribute("class", "box");
    newElement.setAttribute("id", calculateIdNumber());
    container.insertAdjacentElement("beforeend", newElement).append(stickNew);
    document.querySelector(".create-text-area").value = "";

    eventDragStartAndDragEnd();
  });
}
createNewStick();

function calculateIdNumber() {
  let idNumber = Number(document.querySelector(".id-number").textContent);

  idNumber += 1;
  console.log(idNumber);

  document.querySelector(".id-number").textContent = idNumber;

  return idNumber;
}
