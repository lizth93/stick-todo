import { eventDragStartAndDragEnd } from "./setupDragDrop.js";
import {
  setupStickersDeletion,
  setupStickersRecovery,
  deleteAllItemsOnTheTrash,
  setupStickersDestruction,
  handlerClickOnBtnRestoreAll,
} from "./trash-controller.js";
import { getStickersDeteled } from "../views/trash-view";
import { handlerClickColorPicker } from "./colorPiker.js";
import { propertiesStickers, loadStickers } from "../model.js";
import { getStickers } from "../views/stickers-view";
import { handlerClickOnModifySticker } from "./modify-stick";
import { renderPopupAddNewSticker } from "../views/render-popup-add-new";
import { watchColorPicker } from "./colorPiker.js";
import { listenRouteChange } from "./script-popup.js";

export function init() {
  loadStickers();
  setupStickersDeletion();
  setupStickersRecovery();
  setupStickersDestruction();
  deleteAllItemsOnTheTrash();
  handlerClickOnBtnRestoreAll();
  eventDragStartAndDragEnd();
  handlerClickOnModifySticker();
  handlerClickOnCreateNewSticker();
  listenRouteChange();
}

let sticks;
let sticksDelete;
let idHigest = 0;
export function getIdNumber() {
  sticks = getStickers();
  sticksDelete = getStickersDeteled();

  theHigestNumber(sticks);
  theHigestNumber(sticksDelete);
}

function theHigestNumber(sticks) {
  sticks.forEach(function (stick) {
    if (idHigest < Number(stick.id)) {
      idHigest = Number(stick.id);
    }
  });
}

function listenToNewStickSubmit() {
  let button = document.querySelector(".btn--form");

  button.removeEventListener("click", handlerClickOnButtonNewStick);
  button.addEventListener("click", handlerClickOnButtonNewStick);
}

function handlerClickOnButtonNewStick(e) {
  e.preventDefault();

  let newStickerId = idHigest + 1;
  let newStickerValue = document.querySelector(".create-text-area").value;
  const color = watchColorPicker();
  document.querySelector(".create-text-area").value = "";

  propertiesStickers(newStickerId, newStickerValue.trim(), color);
  init();
}

function handlerClickOnCreateNewSticker() {
  const btnCreateNewStick = document.querySelector(".navigation__create-new");

  if (!btnCreateNewStick) return;

  btnCreateNewStick.addEventListener("click", renderModuleCreateNewSticker);
}

function renderModuleCreateNewSticker() {
  getIdNumber();
  renderPopupAddNewSticker(idHigest);
  handlerClickColorPicker();
  listenToNewStickSubmit();
}
