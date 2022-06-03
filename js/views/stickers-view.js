let items = document.querySelector(".container");

export function renderSticker(stick) {
  const markup = `
  <div data-color="${stick.color}" style="background-color:${stick.color}" class="box" draggable="true" id=${stick.id}>
    <header class="header-stick">
        <div class="icon-edit">
          <button class="btn-box btn-box-edit"  draggable="false" >
            <svg
              class="icon-stick"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M18.308 0l-16.87 16.873-1.436 7.127 7.125-1.437 16.872-16.875-5.691-5.688zm-15.751 21.444l.723-3.585 12.239-12.241 2.861 2.862-12.239 12.241-3.584.723zm17.237-14.378l-2.861-2.862 1.377-1.377 2.861 2.861-1.377 1.378z"
              />
            </svg>
          </button>
      </div>
      <div class="icon-deleted">
        <button class="btn-box icon-delete" draggable="false" >
          <svg
            class="icon-stick icon-stick-delete"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"
            />
          </svg>
        </button>
      </div>
    </header>
    <span class="text-content">${stick.value}</span>
  </div>`;

  const htmlObject = document.createElement("div");
  htmlObject.innerHTML = markup;

  items.insertAdjacentElement("beforeend", htmlObject);
}

export function clear() {
  items.innerHTML = "";
}

export function getStickers() {
  return document.querySelectorAll(".container .box");
}

export function onDeleteSticker(handler) {
  const deleteBtns = document.querySelectorAll(".icon-delete");

  if (!deleteBtns) return;

  deleteBtns.forEach((x) => {
    x.removeEventListener("click", handleDeleteClick);
    x.addEventListener("click", handleDeleteClick);
  });

  function handleDeleteClick(e) {
    e.preventDefault();
    const stick = e.target.closest(".box");
    handler(Number(stick.id));
  }
}

export function getStickersDeleteBts() {
  return document.querySelectorAll(".icon-delete");
}
