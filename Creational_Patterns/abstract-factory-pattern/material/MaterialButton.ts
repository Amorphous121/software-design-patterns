import { IButton } from "../interface";

export class MaterialButton implements IButton {
  render(): void {
    console.log("Material Button");
  }
}
