import { Image } from "./Image";
import { IFilter } from "./filter.interface";

export class VividFilter implements IFilter {
  apply(image: Image): void {
    console.log("Applying vivid filter");
  }
}
