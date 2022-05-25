export function trashController() {
  const deleteSticker = document.querySelectorAll(".icon-delete");

  if (!deleteSticker) return;

  deleteSticker.forEach((elem) => {
    elem.addEventListener("click", function (e) {
      e.preventDefault();
      const btn = e.target.closest(".icon-delete");
      console.log("click in b");
    });
  });
}
