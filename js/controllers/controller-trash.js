import {
  stickersList,
  stickerStatusDelete,
  organiceStickersWithStatusDelete,
  organiceStickersWithStatusActive,
  loadStickers,
} from "../model.js";

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

//////////////////////////////////////////////////////////////////////////////////
export function handlerClickOnBtnReturnItemOfTrash() {
  const btnReturnStick = document.querySelectorAll(".icon-return");
  console.log(btnReturnStick, "testing return icon");

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

  // console.log(idNumber, "idNumber from trash");

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
