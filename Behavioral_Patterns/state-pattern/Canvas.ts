import { ITool } from "./Tool.interface";

export class Canvas {
  constructor(private currentTool: ITool) {}

  setCurrentTool(tool: ITool): void {
    this.currentTool = tool;
  }

  getCurrentTool(): ITool {
    return this.currentTool;
  }

  mouseUp(): void {
    this.currentTool.mouseUp();
  }

  mouseDown(): void {
    this.currentTool.mouseDown();
  }
}
