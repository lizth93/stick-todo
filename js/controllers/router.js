import { init } from "./add-new-stick";
import { listenRouteChange } from "./script-popup";

export function start() {
  init();
  listenRouteChange();
}
