let items = document.querySelector(".trash__list");

const buttonsOnTrash = document.querySelectorAll(".btn-trash");

function removeClassHiddenButtonsOnTrash() {
  buttonsOnTrash.forEach((button) => {
    button.classList.remove("hidden");
  });
}
export function renderStickerOnTrash(stick) {
  const markup = `
  <div data-color="${stick.color}" style="background-color:${stick.color}" class="box" draggable="true" id=${stick.id}>
    <header class="header-stick">
      <div>
        <button class="btn-box icon-return" draggable="false" >
          <svg 
            class="icon-stick icon-stick-return"
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24">
            <path d="M19.885 5.515c-4.617-4.618-12.056-4.676-16.756-.195l-2.129-2.258v7.938h7.484l-2.066-2.191c2.82-2.706 7.297-2.676 10.074.1 2.992 2.993 2.664 7.684-.188 10.319l3.314 3.5c4.716-4.226 5.257-12.223.267-17.213z"/>
          </svg>
        </button>
      </div>
      <div>
        <button class="btn-box btn-icon-delete" draggable="false" >
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
        </button>
      </div>
    </header>
    <span class="text-content">${stick.value}</span>
    
  </div>

  `;
  removeClassHiddenButtonsOnTrash();
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

function addClassHiddenButtonsOnTrash() {
  buttonsOnTrash.forEach((button) => {
    button.classList.add("hidden");
  });
}

const errorMessage = "No trash yet!";
export function renderError(message = errorMessage) {
  const markup = `
 
    <div class="message">
      <div>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          class="btn-icon-smile"
        >
          <path
            d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-.045 17.51h-.015c-2.285 0-4.469-1.189-6.153-3.349l.789-.614c1.489 1.911 3.394 2.963 5.364 2.963h.013c1.987-.004 3.907-1.078 5.408-3.021l.791.611c-1.693 2.194-3.894 3.405-6.197 3.41zm-3.468-10.01c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm7.013 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"
          />
        </svg>
      </div>
      <p>${message}</p>
    </div>
    
 `;
  addClassHiddenButtonsOnTrash();
  const htmlObject = document.createElement("div");
  htmlObject.innerHTML = markup;

  items.insertAdjacentElement("beforeend", htmlObject);
}
