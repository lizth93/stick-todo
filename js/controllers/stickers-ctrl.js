import { onDragAndDropEnd } from "../views/drag-and-drop-view";
import { setStickers } from "../model";
import { init } from "../controllers/add-new-stick";

export function setupDragAndDrop() {
  onDragAndDropEnd((stickers) => {
    setStickers(stickers);
    init();
  });
}
