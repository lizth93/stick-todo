import { stickersList, organiceStickersWithStatusDelete } from "../model.js";
import { setItemsLocalStorageStickers } from "../model.js";

export function handlerClickOnButtonStickDelete() {
  const deleteSticker = document.querySelectorAll(".icon-delete");

  if (!deleteSticker) return;

  deleteSticker.forEach((elem) => {
    elem.removeEventListener("click", getIdNumberOfStick);
    elem.addEventListener("click", getIdNumberOfStick);
  });
}

// function deleteAllStickOnTheTrash() {

// }

function getIdNumberOfStick(e) {
  console.log(e, "the e element");
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
  setItemsLocalStorageStickers(stickersList);
}
