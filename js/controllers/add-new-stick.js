import { eventDragStartAndDragEnd } from "./setupDragDrop.js";
import { trashController } from "./controller-trash.js";
import { clear, renderSticker } from "../views/render-sticker.js";
import { color } from "./colorPiker.js";
import { trashController } from "./controller-trash";

let button = document.querySelector(".btn--form");
let sticks;
let stickersList = [];

export function propertiesStickers(
  id,
  value,
  color = "#1098ad",
  status = "active"
) {
  let newSticker = {
    id: id,
    value: value,
    color: color,
    status: status,
  };

  stickersList.push(newSticker);
  setItemsLocalStorageStickers(stickersList);
}

export function createNewStick() {
  button.removeEventListener("click", clickOnButtonNewStick);
  button.addEventListener("click", clickOnButtonNewStick);
}

function clickOnButtonNewStick(e) {
  e.preventDefault();

  let newStickerId = getIdNumber();
  let newStickerValue = document.querySelector(".create-text-area").value;

  renderSticker(newStickerId, newStickerValue, color);
  document.querySelector(".create-text-area").value = "";

  propertiesStickers(newStickerId, newStickerValue, color);
}

export function setItemsLocalStorageStickers(stickersList) {
  localStorage.setItem("localStickersList", JSON.stringify(stickersList));
}

function getStikersLocalStorage() {
  const storedList = localStorage.getItem("localStickersList");
  if (storedList == null) {
    stickersList = [];
  } else {
    stickersList = JSON.parse(storedList);

    clear();
    stickersList.forEach((stick) => {
      const stickerID = stick.id;
      const stickContent = stick.value;
      const stickColor = stick.color;

      renderSticker(stickerID, stickContent, stickColor);
    });
  }
  return stickersList;
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
  getStikersLocalStorage();
  getIdNumber();
  createNewStick();

  eventDragStartAndDragEnd();

  trashController();
}
