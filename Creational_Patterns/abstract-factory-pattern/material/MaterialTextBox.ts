import { ITextBox } from "../interface";

export class MaterialTextBox implements ITextBox {
  render(): void {
    console.log("Material TextBox");
  }
}
