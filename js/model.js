export let stickers = [];
export let trashStickers = [];
import { renderSticker } from "./views/stickers-view";
import { init } from "./controllers/add-new-stick";
import {
  clear as clearTrash,
  renderStickerOnTrash,
  renderEmptyIndicator,
  renderIconTrashEmpty,
  renderIconTrashFilled,
} from "./views/trash-view";
import { clear as clearStickers } from "./views/stickers-view";

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

  stickers.push(newSticker);

  setItemsLocalStorageStickersOnWork(stickers);
}

export function loadStickers() {
  loadStikersFromLS();
  loadTrashStickersFromLS();

  renderStickers();
  renderTrash();
}

export function loadStikersFromLS() {
  const rawStickers = getStickersFromLocalStorage("localStickersList");
  stickers = rawStickers && rawStickers.length ? rawStickers : [];
}

function getStickersFromLocalStorage(key) {
  const rawStickers = localStorage.getItem(key);

  try {
    const stickersParsed = JSON.parse(rawStickers);

    return stickersParsed;
  } catch (err) {
    console.log(
      `Stickers with key ${key} got corrupted. Clearing local storage.`
    );
    localStorage.removeItem(key);

    return null;
  }
}

export function loadTrashStickersFromLS() {
  const rawStickers = getStickersFromLocalStorage("localStickersListOnTrash");
  trashStickers = rawStickers && rawStickers.length ? rawStickers : [];
}

function renderStickers() {
  clearStickers();
  stickers.forEach((stick, i) => renderSticker(stick));
}

function renderTrash() {
  clearTrash();

  if (trashStickers.length === 0) {
    renderEmptyIndicator();
    renderIconTrashEmpty();
  } else {
    renderIconTrashFilled();
    trashStickers.forEach((stick) => renderStickerOnTrash(stick));
  }
}

export function organiceStickersWithStatusDelete() {
  for (let i = 0; i < stickers.length; i++) {
    if (stickers[i].status === "delete") {
      const deleteElement = stickers[i];

      trashStickers.push(deleteElement);
      stickers.splice(i, 1);
    }
  }

  refreshItemsLocalStorage();
}

export function organiceStickersWithStatusActive() {
  for (let i = 0; i < trashStickers.length; i++) {
    if (trashStickers[i].status === "active") {
      const activeElement = trashStickers[i];

      stickers.push(activeElement);
      trashStickers.splice(i, 1);
    }
  }

  refreshItemsLocalStorage();
}

export function refreshItemsLocalStorage() {
  setItemsLocalStorageStickersOnWork(stickers);
  setItemsLocalStorageStickersOnTrash(trashStickers);
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

export function deleteStickerById(id) {
  for (let i = 0; i < stickers.length; i++) {
    if (Number(stickers[i].id) === id) {
      stickers[i].status = "delete";
      const deleteElement = stickers[i];
      trashStickers.push(deleteElement);
      stickers.splice(i, 1);
    }
  }

  setItemsLocalStorageStickersOnWork(stickers);
  setItemsLocalStorageStickersOnTrash(trashStickers);
}

export function recoverStickerById(id) {
  for (let i = 0; i < trashStickers.length; i++) {
    if (Number(trashStickers[i].id) === id) {
      trashStickers[i].status = "active";
      const sticker = trashStickers[i];
      stickers.push(sticker);
      trashStickers.splice(i, 1);
    }
  }

  setItemsLocalStorageStickersOnWork(stickers);
  setItemsLocalStorageStickersOnTrash(trashStickers);
}

export function destroyStickerById(id) {
  for (let i = 0; i < trashStickers.length; i++) {
    if (Number(trashStickers[i].id) === id) {
      trashStickers.splice(i, 1);
    }
  }

  setItemsLocalStorageStickersOnWork(stickers);
  setItemsLocalStorageStickersOnTrash(trashStickers);
}
