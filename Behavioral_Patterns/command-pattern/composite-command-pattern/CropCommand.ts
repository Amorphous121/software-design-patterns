import { ICommand } from "./command.interface";

export class CropCommand implements ICommand {
  execute(): void {
    console.log("Croping the image");
  }
}
