export enum PointType {
  HOSTIPAL,
  CAFE,
  RESTAURANT,
}

export class PointIcon {
  constructor(
    private readonly type: PointType,
    private readonly icon: Buffer
  ) {}

  public getType() {
    return this.type;
  }
}
