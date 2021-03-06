import { handlerClickColorPicker } from "../controllers/colorPiker";

export let popup = document.querySelector(".section-popup");

export function renderPopupModification(
  idNumber,
  colorActually,
  valueActually
) {
  clear();
  const markup = `
  <form class="popup" id="popup">
    <div class="popup__content">
      <div
        class="popup-img-box"
        role="img"
        aria-label="image of postit"
      ></div>
      <div class="popup__right">
        <a href="#container" class="popup__close">&times;</a>
        <h2 class="u-margin-bottom-small">Modify the Sticky</h2>
        <div class="popup__flex">
          <label class="id-number">${idNumber}</label>
          <div>
            <label for="create-text" class="create-text"
              >Input the text</label
            >
            <br />
            <textarea
              name="create-text"
              id="create-text"
             
              placeholder="Type the content"
              class="create-text-area u-margin-bottom-small"
              required
            >${valueActually}</textarea>
          </div>

          <div>
            <label for="create-color" class="create-text"
              >Select color</label
            >
            <br />
            <input
              type="color"
              name="create-color"
              id="create-color"
              class="create-color"
              value=${colorActually}
            />
          </div>
        </div>
        <button class="btn popup-button-element">Save</button>
      </div>
    </div>
  </form>`;

  const htmlObject = document.createElement("div");
  htmlObject.innerHTML = markup;

  popup.insertAdjacentElement("beforeend", htmlObject);

  window.location.hash = "#popup";
}

export function clear() {
  popup.innerHTML = "";
}

export function onModificationSticker(handler) {
  const modificationStickBtn = document.querySelectorAll(".btn-box-edit");

  if (!modificationStickBtn) return;

  modificationStickBtn.forEach((elem) => {
    elem.removeEventListener("click", handleClick);
    elem.addEventListener("click", handleClick);
  });

  function handleClick(e) {
    e.preventDefault();
    const sticker = e.target.closest(".box");
    handler(Number(sticker.id));
  }
}

export function onSaveModificationSticker(handler) {
  const saveStickBtn = document.querySelector(".popup-button-element");
  saveStickBtn.removeEventListener("click", handleClick);
  saveStickBtn.addEventListener("click", handleClick);

  function handleClick(e) {
    e.preventDefault();
    let colorNew = handlerClickColorPicker();
    let valueNew = document.querySelector(".create-text-area").value;

    handler(colorNew, valueNew);
  }
}
