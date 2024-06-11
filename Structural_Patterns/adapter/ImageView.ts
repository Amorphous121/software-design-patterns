import { Image } from "./Image";
import { IFilter } from "./filter.interface";

export class ImageView {
  constructor(private image: Image) {}

  public apply(filter: IFilter): void {
    filter.apply(this.image);
  }
}
