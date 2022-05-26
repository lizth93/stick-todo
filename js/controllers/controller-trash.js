export function trashController() {
  const deleteSticker = document.querySelectorAll(".icon-delete");

  if (!deleteSticker) return;

  deleteSticker.forEach((elem) => {
    elem.removeEventListener("click", clickOnDeleteButton);
    elem.addEventListener("click", clickOnDeleteButton);
  });
}

function clickOnDeleteButton(e) {
  console.log(e, "the e element");
  e.preventDefault();

  const stick = e.target.closest(".box");
  let idNumber = Number(stick.id);

  console.log(idNumber, "this is the id");
}
