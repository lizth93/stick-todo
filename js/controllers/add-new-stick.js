import { eventDragStartAndDragEnd } from "./setupDragDrop.js";
import {
  handlerClickOnButtonStickDelete,
  deleteAllItemsOnTheTrash,
} from "./controller-trash.js";
import { renderSticker } from "../views/render-sticker.js";
import { color } from "./colorPiker.js";
import { propertiesStickers, loadStickers } from "../model.js";
import { getStickers } from "../views/render-sticker";

export function init() {
  loadStickers();
  // TODO: Delete this invokation of getIdNumber().
  // This method should be invoked only when a new sticket is created.
  getIdNumber();
  listenToNewStickSubmit();
  eventDragStartAndDragEnd();
  handlerClickOnButtonStickDelete();
  deleteAllItemsOnTheTrash();
}

let sticks;
export function getIdNumber() {
  let idHigest = 0;
  sticks = getStickers();
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

let button = document.querySelector(".btn--form");
function listenToNewStickSubmit() {
  button.removeEventListener("click", handlerClickOnButtonNewStick);
  button.addEventListener("click", handlerClickOnButtonNewStick);
}

function handlerClickOnButtonNewStick(e) {
  e.preventDefault();

  let newStickerId = getIdNumber();
  let newStickerValue = document.querySelector(".create-text-area").value;

  renderSticker(newStickerId, newStickerValue, color);
  document.querySelector(".create-text-area").value = "";

  propertiesStickers(newStickerId, newStickerValue, color);
}
