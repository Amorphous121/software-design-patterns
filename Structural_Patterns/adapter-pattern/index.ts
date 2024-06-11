import { CaramelAdapter } from "./CaramelAdapter";
import { CaramelFilter } from "./CaramelFilter";
import { Image } from "./Image";
import { ImageView } from "./ImageView";
import { VividFilter } from "./VividFilter";
import { Caramel } from "./avaFilters/Caramel";

const imageView = new ImageView(new Image());

imageView.apply(new VividFilter());

imageView.apply(new CaramelFilter(new Caramel())); // 1st Method

imageView.apply(new CaramelAdapter()); // 2nd Method
