import { ITextBox } from "../interface";

export class AntTextBox implements ITextBox {
  render(): void {
    console.log("Ant TextBox");
  }
}
