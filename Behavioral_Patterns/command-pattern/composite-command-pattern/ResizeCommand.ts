import { ICommand } from "./command.interface";

export class ResizeCommand implements ICommand {
  execute(): void {
    console.log("Resizing the window");
  }
}
