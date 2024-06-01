import { ITool } from "./Tool.interface";

export class EraseTool implements ITool {
  mouseUp(): void {
    console.log("Erase tool mouse-up event fired");
  }

  mouseDown(): void {
    console.log("Erase tool mouse-down event fired");
  }
}
