import { ICommand } from "./command.interface";

export class Button {
  private label: string = "";
  
  constructor(private command: ICommand) {}

  public setLabel(label: string): void {
    this.label = label;
  }

  public getlabel(): string {
    return this.label;
  }

  public click(): void {
    this.command.execute();
  }
}
