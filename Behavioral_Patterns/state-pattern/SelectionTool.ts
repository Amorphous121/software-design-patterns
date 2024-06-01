import { ITool } from "./Tool.interface";

export class SelectionTool implements ITool {
  mouseUp(): void {
    console.log("Selection Tool mouse-up event fired");
  }

  mouseDown(): void {
    console.log("Selection Tool mouse-down event fired");
  }
}
