const popupContent = document.querySelector(".popup__content");
const generalContent = document.querySelector("html");
let path;
const popupCloseLink = document.querySelector(".popup__close");
const bookNowPopupButton = document.querySelector(".popup-button-element");

export function listenRouteChange() {
  ["hashchange", "load"].forEach((eventName) => {
    window.addEventListener(eventName, () => {
      closePopupByOutsideClick();
      stopListeningPopupOutsideClick();
    });
  });
}

function closePopupByOutsideClick() {
  if (getCurrentPath() === "popup") {
    [generalContent, popupCloseLink].forEach(function (event) {
      event.addEventListener("click", closePopup);
    });

    bookNowPopupButton.addEventListener("click", () => {
      window.location.hash = "#";
    });

    popupContent.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }
}

function closePopup() {
  window.location.hash = "#";
}

function getCurrentPath() {
  return window.location.hash.replace("#", "");
}

function stopListeningPopupOutsideClick() {
  if (getCurrentPath() !== "popup") {
    [generalContent, popupCloseLink].forEach(function (event) {
      event.removeEventListener("click", closePopup);
    });
  }
}
