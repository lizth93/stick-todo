import { getIdNumber } from "./add-new-stick";
import { eventDragStartAndDragEnd } from "./setupDragDrop.js";

const popupContent = document.querySelector(".popup__content");
const generalContent = document.querySelector("html");
const popupCloseLink = document.querySelector(".popup__close");
const createPopupButton = document.querySelector(".popup-button-element");

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

    createPopupButton.addEventListener("click", () => {
      window.location.hash = "#";

      getIdNumber();
      eventDragStartAndDragEnd();
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
