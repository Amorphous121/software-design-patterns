import { Point } from "./Point";
import { PointType } from "./PointIcon";
import { PointIconFactory } from "./PointIconFactory";

export class PointService {
  constructor(private iconFactory: PointIconFactory) {}

  public getPoints(): Point[] {
    return [new Point(1, 2, this.iconFactory.getPointIcon(PointType.CAFE))];
  }
}
