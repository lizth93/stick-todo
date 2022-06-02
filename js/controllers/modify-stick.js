import { organiceStickersWithStatusActive, stickersList } from "../model";
import { renderPopupModification } from "../views/render-popup-modify";
import { handlerClickColorPicker } from "./colorPiker";

export function handlerClickOnModifySticker() {
  const btnModifyStick = document.querySelectorAll(".btn-box-edit");

  if (!btnModifyStick) return;

  btnModifyStick.forEach((elem) => {
    elem.removeEventListener("click", getIdNumberOfStick);
    elem.addEventListener("click", getIdNumberOfStick);
  });
}

let idNumber;
function getIdNumberOfStick(e) {
  e.preventDefault();
  const stick = e.target.closest(".box");
  idNumber = Number(stick.id);

  renderInfoToStikerToModify(idNumber);
}

function renderInfoToStikerToModify(idNumber) {
  let colorActually;
  let valueActually;

  for (let i = 0; i < stickersList.length; i++) {
    if (Number(stickersList[i].id) === idNumber) {
      colorActually = stickersList[i].color;
      valueActually = stickersList[i].value;
    }
  }

  renderPopupModification(idNumber, colorActually, valueActually);
  handlerClickOnSaveChangesToStick(idNumber);
}

function handlerClickOnSaveChangesToStick() {
  const buttonSaveChanges = document.querySelector(".popup-button-element");
  buttonSaveChanges.removeEventListener("click", saveChangesOnStick);
  buttonSaveChanges.addEventListener("click", saveChangesOnStick);
}

export function saveChangesOnStick(e) {
  e.preventDefault();
  let colorNew = handlerClickColorPicker();

  let valueNew = document.querySelector(".create-text-area").value;

  for (let i = 0; i < stickersList.length; i++) {
    if (Number(stickersList[i].id) === idNumber) {
      stickersList[i].color = colorNew;
      stickersList[i].value = valueNew;
    }
  }

  organiceStickersWithStatusActive();
}
