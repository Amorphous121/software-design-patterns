import { IButton } from "../interface";

export class AntButton implements IButton {
  render(): void {
    console.log("Ant Button");
  }
}
