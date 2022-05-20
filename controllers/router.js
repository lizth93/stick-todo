import { eventDragStartAndDragEnd } from "./setupDragDrop.js";
import { createNewStick } from "./add-new-stick";

export function start() {
  createNewStick();

  eventDragStartAndDragEnd();
}
