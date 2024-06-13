import { IComponent } from "./component.interface";

export class Circle implements IComponent {
  private radius: number = 0;

  public getRadius(): number {
    return this.radius;
  }

  public setRadius(radius: number): void {
    this.radius = radius;
  }

  render(): void {
    console.log("Rendering a circle");
  }

  clone(): IComponent {
    const newCircle = new Circle();
    newCircle.setRadius(this.radius);
    return newCircle;
  }
}
