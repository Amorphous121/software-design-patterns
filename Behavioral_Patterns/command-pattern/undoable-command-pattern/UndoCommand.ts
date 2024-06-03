import { History } from "./History";
import { ICommand } from "./command.interface";

export class UndoCommand implements ICommand {
  constructor(private history: History) {}

  execute(): void {
    if (this.history.size()) {
      this.history.pop()!.unexecute();
    }
  }
}
