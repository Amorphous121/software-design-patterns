import { PointIcon, PointType } from "./PointIcon";

export class PointIconFactory {
  private icons: Map<PointType, PointIcon> = new Map();

  public getPointIcon(type: PointType): PointIcon {
    if (!this.icons.has(type)) {
      const icon = new PointIcon(type, Buffer.from(`${type}`));
      this.icons.set(type, icon);
    }

    return this.icons.get(type)!;
  }
}
