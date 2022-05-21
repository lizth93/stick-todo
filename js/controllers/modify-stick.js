// export default class ModifySticker {}

function modifySticker() {
  document.querySelectorAll(".container").forEach((elem) => {
    elem.addEventListener("click", () => {
      const root = document.querySelector(".box");
      console.log(root);

      // const markup = this.renderSmallImages(elem);
      // root.innerHTML = "";

      // root.insertAdjacentHTML("afterbegin", markup);
    });
  });
}

modifySticker();
