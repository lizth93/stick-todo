import { eventDragStartAndDragEnd } from "./setupDragDrop.js";
import {
  handlerClickOnButtonStickDelete,
  handlerClickOnBtnReturnItemOfTrash,
  deleteAllItemsOnTheTrash,
  handlerClickOnBtnRestoreAll,
} from "./controller-trash.js";
import { renderSticker } from "../views/render-sticker.js";
import { getStickersDeteled } from "../views/render-sticker-trash";
import { color } from "./colorPiker.js";
import { propertiesStickers, loadStickers } from "../model.js";
import { getStickers } from "../views/render-sticker";

export function init() {
  loadStickers();
  listenToNewStickSubmit();
  handlerClickOnButtonStickDelete();
  handlerClickOnBtnReturnItemOfTrash();
  deleteAllItemsOnTheTrash();
  handlerClickOnBtnRestoreAll();
  eventDragStartAndDragEnd();
}

let sticks;
let sticksDelete;
let idHigest = 0;
export function getIdNumber() {
  sticks = getStickers();
  sticksDelete = getStickersDeteled();

  sticks.forEach(function (stick) {
    if (idHigest < Number(stick.id)) {
      idHigest = Number(stick.id);
    }
  });

  sticksDelete.forEach(function (stick) {
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
  getIdNumber();
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
  loadStickers();
}
