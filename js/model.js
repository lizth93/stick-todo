export let stickersList = [];
export let stickerStatusDelete = [];
// import { clear, renderSticker } from "../js/views/render-sticker";

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

  setItemsLocalStorageStickers(stickersList);
}

export function organiceStickersWithStatusDelete() {
  for (let i = 0; i < stickersList.length; i++) {
    if (stickersList[i].status === "delete") {
      const deleteElement = stickersList[i];
      console.log(stickersList[i], "elemento a eliminar");
      stickerStatusDelete.push(deleteElement);
      stickersList.splice(i, 1);
    }
  }

  console.log("organiceStickersWithStatusDelete", stickerStatusDelete);
  console.log("stickersList", stickersList);
}

export function setItemsLocalStorageStickers(stickersList) {
  localStorage.setItem("localStickersList", JSON.stringify(stickersList));
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
