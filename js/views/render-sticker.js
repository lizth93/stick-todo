// <!-- <div class="box" draggable="true" id="1">TEst</div> -->

let items = document.querySelector(".container");

export function renderSticker(id, content, color) {
  const markup = `<div data-color="${color}" style="background-color:${color}" class="box" draggable="true"  id=${id}>${content}</div>`;
  // clear();
  const htmlObject = document.createElement("div");
  htmlObject.innerHTML = markup;

  items.insertAdjacentElement("beforeend", htmlObject);
}

// function clear() {
//   items.innerHTML = "";
// }
