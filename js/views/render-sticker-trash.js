let items = document.querySelector(".trash__list");

export function renderStickerOnTrash(stick) {
  const markup = `
  <div data-color="${stick.color}" style="background-color:${stick.color}" class="box" draggable="true" id=${stick.id}>
    <header class="header-stick">
      <div>
        <a href="" class="icon-return" draggable="false" >
          <svg 
            class="icon-stick icon-stick-return"
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24">
            <path d="M19.885 5.515c-4.617-4.618-12.056-4.676-16.756-.195l-2.129-2.258v7.938h7.484l-2.066-2.191c2.82-2.706 7.297-2.676 10.074.1 2.992 2.993 2.664 7.684-.188 10.319l3.314 3.5c4.716-4.226 5.257-12.223.267-17.213z"/>
          </svg>
        </a>
      </div>
      <div>
        <a href="" class="icon-delete" draggable="false" >
          <svg
            class="icon-stick icon-delete-svg icon-stick-delete"
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
    <span class="text-content">${stick.value}</span>
    
  </div>
  `;

  const htmlObject = document.createElement("div");
  htmlObject.innerHTML = markup;

  items.insertAdjacentElement("beforeend", htmlObject);
}

export function clearOnTrash() {
  items.innerHTML = "";
}

export function getStickersDeteled() {
  return document.querySelectorAll(".trash .box");
}
