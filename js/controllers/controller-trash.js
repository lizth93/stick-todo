import {
  stickersList,
  stickerStatusDelete,
  organiceStickersWithStatusDelete,
  organiceStickersWithStatusActive,
  loadStickers,
  setItemsLocalStorageStickersOnWork,
} from "../model.js";

import { getStickersDeteled } from "../views/render-sticker-trash";
import { init } from "./add-new-stick.js";

export function handlerClickOnButtonStickDelete() {
  const deleteSticker = document.querySelectorAll(".icon-delete");

  if (!deleteSticker) return;

  deleteSticker.forEach((elem) => {
    elem.removeEventListener("click", getIdNumberOfStick);
    elem.addEventListener("click", getIdNumberOfStick);
  });
}

function getIdNumberOfStick(e) {
  e.preventDefault();

  const stick = e.target.closest(".box");

  let idNumber = Number(stick.id);

  changeStatusOfSticker(idNumber);
}

function changeStatusOfSticker(idNumber) {
  for (let i = 0; i < stickersList.length; i++) {
    if (Number(stickersList[i].id) === idNumber) {
      stickersList[i].status = "delete";
    }
  }

  organiceStickersWithStatusDelete();
}

export function deleteAllItemsOnTheTrash() {
  const btnDeleteAll = document.querySelector(".btn-delete-all");

  if (!btnDeleteAll) return;
  btnDeleteAll.removeEventListener("click", clickOnButtonDeleteAll);
  btnDeleteAll.addEventListener("click", clickOnButtonDeleteAll);
}

function clickOnButtonDeleteAll(e) {
  e.preventDefault();
  localStorage.removeItem("localStickersListOnTrash");
  loadStickers();
}

//////////////////////RETURN//////////////////////////////////
export function handlerClickOnBtnReturnItemOfTrash() {
  const btnReturnStick = document.querySelectorAll(".icon-return");

  if (!btnReturnStick) return;

  btnReturnStick.forEach((elem) => {
    elem.removeEventListener("click", getIdNumberOfStickReturn);
    elem.addEventListener("click", getIdNumberOfStickReturn);
  });
}

function getIdNumberOfStickReturn(e) {
  e.preventDefault();
  const stick = e.target.closest(".box");
  let idNumber = Number(stick.id);

  changeStatusOfStickerReturn(idNumber);
}

function changeStatusOfStickerReturn(idNumber) {
  for (let i = 0; i < stickerStatusDelete.length; i++) {
    if (Number(stickerStatusDelete[i].id) === idNumber) {
      stickerStatusDelete[i].status = "active";
    }
  }

  organiceStickersWithStatusActive();
}

//////////////////////DELETE OF TRASH BY ONE//////////////////////////////////

export function handlerClickOnBtnDeleteItemOfTrash() {
  const btnDeleteOfTrashStick = document.querySelectorAll(".btn-icon-delete");

  if (!btnDeleteOfTrashStick) return;

  btnDeleteOfTrashStick.forEach((elem) => {
    elem.removeEventListener("click", getIdNumberOfStickDelete);
    elem.addEventListener("click", getIdNumberOfStickDelete);
  });
}

function getIdNumberOfStickDelete(e) {
  e.preventDefault();
  const stick = e.target.closest(".box");
  let idNumber = Number(stick.id);

  console.log("id delete", idNumber);
  changeStatusOfStickerDelete(idNumber);
}

function changeStatusOfStickerDelete(idNumber) {
  for (let i = 0; i < stickerStatusDelete.length; i++) {
    if (Number(stickerStatusDelete[i].id) === idNumber) {
      stickerStatusDelete.splice(i, 1);

      organiceStickersWithStatusActive();
    }
  }
}

/////////////////////////////////////////////////////////////

export function handlerClickOnBtnRestoreAll() {
  const btnRestoreAll = document.querySelector(".btn-restore-all");

  btnRestoreAll.removeEventListener("click", restoreAllElements);
  btnRestoreAll.addEventListener("click", restoreAllElements);
}

function restoreAllElements(e) {
  e.preventDefault();
  const stickersTrash = getStickersDeteled();
  console.log(stickersTrash, "stickers on trash");

  stickerStatusDelete = [];
  stickersTrash.forEach((item) => {
    let newSticker = {
      id: item.id,
      value: item.innerText,
      color: item.dataset.color,
      status: "active",
    };

    stickersList.push(newSticker);

    setItemsLocalStorageStickersOnWork(stickersList);
    localStorage.removeItem("localStickersListOnTrash");
    init();
  });
}
