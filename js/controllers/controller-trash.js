import {
  stickersList,
  organiceStickersWithStatusDelete,
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
  btnDeleteAll.removeEventListener("click", clickOnButtonDelete);
  btnDeleteAll.addEventListener("click", clickOnButtonDelete);
}

function clickOnButtonDelete(e) {
  e.preventDefault();

  localStorage.removeItem("localStickersListOnTrash");

  loadStickers();
}
