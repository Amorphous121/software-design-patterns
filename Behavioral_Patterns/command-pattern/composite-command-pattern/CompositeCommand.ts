import { ICommand } from "./command.interface";

export class CompositeCommand implements ICommand {
  constructor(private readonly commands: ICommand[] = []) {}

  public add(command: ICommand): void {
    this.commands.push(command);
  }

  public remove(): undefined | ICommand {
    return this.commands.pop();
  }

  public execute(): void {
    for (const command of this.commands) {
      command.execute();
    }
  }
}
