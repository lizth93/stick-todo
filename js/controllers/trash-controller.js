import { init } from "./add-new-stick.js";
import {
  deleteStickerById,
  recoverStickerById,
  destroyStickerById,
  restoreStickers,
  destroyStickers,
} from "../model.js";
import {
  onRecoverySticker,
  onDestroySticker,
  onDestroyStickers,
  onRestoreStickers,
} from "../views/trash-view";
import { onDeleteSticker } from "../views/stickers-view";

export function setupStickersDeletion() {
  onDeleteSticker((stickerId) => {
    deleteStickerById(stickerId);
    init();
  });
}

export function setupStickersRecovery() {
  onRecoverySticker((stickerId) => {
    recoverStickerById(stickerId);
    init();
  });
}

export function setupStickersDestruction() {
  onDestroySticker((stickerId) => {
    destroyStickerById(stickerId);
    init();
  });
}

export function setupCompleteStickersDestruction() {
  onDestroyStickers(() => {
    destroyStickers();
    init();
  });
}

export function setupCompleteStickersRestore() {
  onRestoreStickers(() => {
    restoreStickers();
    init();
  });
}
