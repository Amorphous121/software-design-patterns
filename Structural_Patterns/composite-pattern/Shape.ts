import { IComponent } from "./component.interface";

export class Shape implements IComponent {
  public render() {
    console.log("Render Shape");
  }

  public move() {
    console.log('Moving a shape')
  }
}
