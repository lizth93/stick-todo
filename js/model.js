export let stickersList = [];
export let stickerStatusDelete = [];
import { clear, renderSticker } from "../js/views/render-sticker";
import { init } from "./controllers/add-new-stick";
import {
  clearOnTrash,
  renderStickerOnTrash,
  renderError,
} from "./views/render-sticker-trash";

export function propertiesStickers(
  id,
  value,
  color = "#1098ad",
  status = "active"
) {
  let newSticker = {
    id: id,
    value: value,
    color: color,
    status: status,
  };

  stickersList.push(newSticker);

  setItemsLocalStorageStickersOnWork(stickersList);
}

export function loadStickers() {
  const stickers = getStikersLocalStorage();
  getStikersLocalStorageOnTrash();
  clear();

  stickers.forEach((stick) => {
    renderSticker(stick);
  });

  clearOnTrash();

  if (stickerStatusDelete.length === 0) {
    renderError();
  }

  stickerStatusDelete.forEach((stick) => {
    renderStickerOnTrash(stick);
  });
}

export function organiceStickersWithStatusDelete() {
  for (let i = 0; i < stickersList.length; i++) {
    if (stickersList[i].status === "delete") {
      const deleteElement = stickersList[i];

      stickerStatusDelete.push(deleteElement);
      stickersList.splice(i, 1);
    }
  }

  refreshItemsLocalStorage();
}

export function organiceStickersWithStatusActive() {
  for (let i = 0; i < stickerStatusDelete.length; i++) {
    if (stickerStatusDelete[i].status === "active") {
      const activeElement = stickerStatusDelete[i];

      stickersList.push(activeElement);
      stickerStatusDelete.splice(i, 1);
    }
  }

  refreshItemsLocalStorage();
}

function refreshItemsLocalStorage() {
  setItemsLocalStorageStickersOnWork(stickersList);
  setItemsLocalStorageStickersOnTrash(stickerStatusDelete);
  init();
}

export function setItemsLocalStorageStickersOnWork(stickersList) {
  localStorage.setItem("localStickersList", JSON.stringify(stickersList));
}

export function setItemsLocalStorageStickersOnTrash(stickersList) {
  localStorage.setItem(
    "localStickersListOnTrash",
    JSON.stringify(stickersList)
  );
}

export function getStikersLocalStorage() {
  const stickers = getStickersFromLocalStorage("localStickersList");
  stickersList = stickers && stickers.length ? stickers : [];

  return stickersList;
}

export function getStikersLocalStorageOnTrash() {
  const stickers = getStickersFromLocalStorage("localStickersListOnTrash");
  stickerStatusDelete = stickers && stickers.length ? stickers : [];

  return stickerStatusDelete;
}

function getStickersFromLocalStorage(key) {
  const stickers = localStorage.getItem(key);

  try {
    const stickersParsed = JSON.parse(stickers);

    return stickersParsed;
  } catch (err) {
    console.log(
      `Stickers with key ${key} got corrupted. Clearing local storage.`
    );
    localStorage.removeItem(key);

    return null;
  }
}
