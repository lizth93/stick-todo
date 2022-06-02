import { renderPopupModification } from "../views/render-popup-modify";

export function handlerClickOnModifySticker() {
  const btnModifyStick = document.querySelectorAll(".btn-box-edit");

  if (!btnModifyStick) return;

  btnModifyStick.forEach((elem) => {
    elem.removeEventListener("click", getIdNumberOfStick);
    elem.addEventListener("click", getIdNumberOfStick);
  });
}

function getIdNumberOfStick(e) {
  e.preventDefault();
  const stick = e.target.closest(".box");
  let idNumber = Number(stick.id);
  console.log("the stick to edit is", idNumber);
  moduleToModifySticker(idNumber);
}

function moduleToModifySticker(idNumber) {
  renderPopupModification();
}
