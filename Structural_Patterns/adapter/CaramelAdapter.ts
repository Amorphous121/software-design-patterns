import { Image } from "./Image";
import { Caramel } from "./avaFilters/Caramel";
import { IFilter } from "./filter.interface";

export class CaramelAdapter extends Caramel implements IFilter {
  constructor() {
    super();
  }

  apply(image: Image): void {
    this.init();
    this.render(image);
  }
}
