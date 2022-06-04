import { modifyStickers, stickers } from "../model";
import {
  onModificationSticker,
  onSaveModificationSticker,
  renderPopupModification,
} from "../views/render-popup-modify";
import { init } from "./add-new-stick";

export function setupStickerModification() {
  onModificationSticker((stickerId) => {
    let colorActually;
    let valueActually;

    for (let i = 0; i < stickers.length; i++) {
      if (Number(stickers[i].id) === stickerId) {
        colorActually = stickers[i].color;
        valueActually = stickers[i].value;
      }
    }
    renderPopupModification(stickerId, colorActually, valueActually.trim());
    setupStickerModificationSave(stickerId);
  });
}

function setupStickerModificationSave(stickerId) {
  onSaveModificationSticker((colorNew, valueNew) => {
    modifyStickers(stickerId, colorNew, valueNew);
    init();
  });
}
