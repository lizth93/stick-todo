import { init } from "./add-new-stick.js";
import {
  stickers,
  trashStickers,
  organiceStickersWithStatusActive,
  loadStickers,
  setItemsLocalStorageStickersOnWork,
  setItemsLocalStorageStickersOnTrash,
  deleteStickerById,
  refreshItemsLocalStorage,
  recoverStickerById,
  destroyStickerById,
} from "../model.js";
import {
  getStickersDeteled,
  onRecoverySticker,
  onDestroySticker,
} from "../views/trash-view";
import { onDeleteSticker } from "../views/stickers-view";

export function setupStickersDeletion() {
  onDeleteSticker((stickerId) => {
    deleteStickerById(stickerId);
    init();
  });
}

export function setupStickersRecovery() {
  onRecoverySticker((stickerId) => {
    recoverStickerById(stickerId);
    init();
  });
}

export function setupStickersDestruction() {
  onDestroySticker((stickerId) => {
    destroyStickerById(stickerId);
    init();
  });
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

//////////////////////DELETE OF TRASH BY ONE//////////////////////////////////

function getIdNumberOfStickDelete(e) {
  e.preventDefault();
  const stick = e.target.closest(".box");
  let idNumber = Number(stick.id);

  console.log("id delete", idNumber);
  changeStatusOfStickerDelete(idNumber);
}

function changeStatusOfStickerDelete(idNumber) {
  for (let i = 0; i < trashStickers.length; i++) {
    if (Number(trashStickers[i].id) === idNumber) {
      trashStickers.splice(i, 1);

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

  trashStickers = [];
  stickersTrash.forEach((item) => {
    let newSticker = {
      id: item.id,
      value: item.innerText,
      color: item.dataset.color,
      status: "active",
    };

    stickers.push(newSticker);

    setItemsLocalStorageStickersOnWork(stickers);
    localStorage.removeItem("localStickersListOnTrash");
    init();
  });
}
