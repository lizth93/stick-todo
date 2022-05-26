import { eventDragStartAndDragEnd } from "./setupDragDrop.js";
import { trashController } from "./controller-trash.js";
import { renderSticker, clear } from "../views/render-sticker.js";
import { color } from "./colorPiker.js";
import { trashController } from "./controller-trash";
import { propertiesStickers, getStikersLocalStorage } from "../model.js";

let button = document.querySelector(".btn--form");
let sticks;

export function createNewStick() {
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

async function loadStickers() {
  const stickersList = await getStikersLocalStorage();
  // console.log("stickers", stickersList);

  clear();
  stickersList.forEach((stick) => {
    const stickerID = stick.id;
    const stickContent = stick.value;
    const stickColor = stick.color;

    renderSticker(stickerID, stickContent, stickColor);
  });
}

export async function init() {
  // getStikersLocalStorage();
  await loadStickers();
  getIdNumber();

  createNewStick();
  eventDragStartAndDragEnd();
  trashController();
}
