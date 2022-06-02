export let popup = document.querySelector(".section-popup");

export function renderPopupModification() {
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
          <label class="id-number">0</label>
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
