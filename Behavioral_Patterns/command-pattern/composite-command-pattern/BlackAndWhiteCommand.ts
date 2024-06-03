import { ICommand } from "./command.interface";

export class BlackAndWhiteCommand implements ICommand {
  execute(): void {
    console.log("Applying Black And White Filter");
  }
}
