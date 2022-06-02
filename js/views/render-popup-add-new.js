import { init } from "../controllers/add-new-stick";
import { popup, clear } from "./render-popup-modify";

export function renderPopupAddNewSticker(idHigest) {
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
        <h2 class="u-margin-bottom-small">Create the Sticky</h2>
        <div class="popup__flex">
          <label class="id-number">${Number(idHigest) + 1} </label>
          <div>
            <label for="create-text" class="create-text"
              >Input the text</label
            >
            <br />
            <textarea
              name="create-text"
              id="create-text"
              cols="45"
              rows="7"
              placeholder="Type the content"
              class="create-text-area u-margin-bottom-small"
              required
            ></textarea>
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
              value="#1098ad"
            />
          </div>
        </div>
        <button class="btn btn--form popup-button-element">Create</button>
      </div>
    </div>
  </form>`;

  const htmlObject = document.createElement("div");
  htmlObject.innerHTML = markup;

  popup.insertAdjacentElement("beforeend", htmlObject);

  window.location.hash = "#popup";
  // init();
}
