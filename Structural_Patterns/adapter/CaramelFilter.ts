import { Image } from "./Image";
import { Caramel } from "./avaFilters/Caramel";
import { IFilter } from "./filter.interface";

export class CaramelFilter implements IFilter {
  constructor(private caramel: Caramel) {}

  apply(image: Image): void {
    this.caramel.init();
    this.caramel.render(image);
  }
}
