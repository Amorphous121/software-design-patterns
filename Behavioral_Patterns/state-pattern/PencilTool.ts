import { ITool } from "./Tool.interface";

export class PencilTool implements ITool {
  mouseDown(): void {
    console.log("Pencil tool mouse-down event fired");
  }

  mouseUp(): void {
    console.log("Pencil tool mouse-up event fired");
  }
}
