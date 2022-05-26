let stickersList = [];
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

export function setItemsLocalStorageStickers(stickersList) {
  localStorage.setItem("localStickersList", JSON.stringify(stickersList));
}

export function getStikersLocalStorage() {
  const storedList = localStorage.getItem("localStickersList");
  if (storedList == null) {
    stickersList = [];
  } else {
    stickersList = JSON.parse(storedList);

    // clear();
    // stickersList.forEach((stick) => {
    //   const stickerID = stick.id;
    //   const stickContent = stick.value;
    //   const stickColor = stick.color;

    //   renderSticker(stickerID, stickContent, stickColor);
    // });
  }
  return stickersList;
}
