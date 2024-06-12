import { PointIcon } from "./PointIcon";

export class Point {
  constructor(
    private x: number,
    private y: number,
    private pointIcon: PointIcon
  ) {}

  public draw(): void {
    console.log(`${this.pointIcon.getType()} at (${this.x}, ${this.y})`);
  }
}
