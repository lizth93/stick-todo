let items = document.querySelector(".trash__list");

export function renderStickerOnTrash(id, content, color) {
  const markup = `
  <div data-color="${color}" style="background-color:${color}" class="box" draggable="true" id=${id}>
    <header class="header-stick">
        
      <div>
        <a href="" class="icon-delete" draggable="false" >
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
        </a>
      </div>
    </header>
    <span class="text-content">${content}</span>
    
  </div>
  `;

  const htmlObject = document.createElement("div");
  htmlObject.innerHTML = markup;

  items.insertAdjacentElement("beforeend", htmlObject);
}

export function clearOnTrash() {
  items.innerHTML = "";
}
