import { Image } from "./Image";

export interface IFilter {
  apply(image: Image): void;
}
