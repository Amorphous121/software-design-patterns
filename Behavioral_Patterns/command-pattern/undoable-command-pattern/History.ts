import { IUndoableCommand } from "./command.interface";

export class History {
  constructor(private commands: IUndoableCommand[] = []) {}

  public push(command: IUndoableCommand) {
    this.commands.push(command);
  }

  public pop(): IUndoableCommand | undefined {
    return this.commands.pop();
  }

  public size(): number {
    return this.commands.length;
  }
}
