export let stickersList = [];
export let stickerStatusDelete = [];
import { clear, renderSticker } from "../js/views/render-sticker";
import {
  clearOnTrash,
  renderStickerOnTrash,
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

export async function loadStickers() {
  const stickersList = await getStikersLocalStorage();
  const stickersListOnTrash = await getStikersLocalStorageOnTrash();
  console.log("inicial state:", stickersList);

  clear();
  stickersList.forEach((stick) => {
    const stickerID = stick.id;
    const stickContent = stick.value;
    const stickColor = stick.color;

    renderSticker(stickerID, stickContent, stickColor);
  });

  clearOnTrash();
  stickerStatusDelete.forEach((stick) => {
    const stickerIDOnTrash = stick.id;
    const stickContentOnTrash = stick.value;
    const stickColorOnTrash = stick.color;

    renderStickerOnTrash(
      stickerIDOnTrash,
      stickContentOnTrash,
      stickColorOnTrash
    );
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

  setItemsLocalStorageStickersOnWork(stickersList);
  setItemsLocalStorageStickersOnTrash(stickerStatusDelete);
  loadStickers();
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
  const storedList = localStorage.getItem("localStickersList");
  if (storedList == null) {
    stickersList = [];
  } else {
    stickersList = JSON.parse(storedList);
  }
  return stickersList;
}

export function getStikersLocalStorageOnTrash() {
  const storedList = localStorage.getItem("localStickersListOnTrash");
  if (storedList == null) {
    stickerStatusDelete = [];
  } else {
    stickerStatusDelete = JSON.parse(storedList);
  }
  return stickerStatusDelete;
}
