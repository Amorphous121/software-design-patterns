import { BlackAndWhiteCommand } from "./BlackAndWhiteCommand";
import { CompositeCommand } from "./CompositeCommand";
import { CropCommand } from "./CropCommand";
import { ResizeCommand } from "./ResizeCommand";

const composite = new CompositeCommand();

composite.add(new CropCommand());
composite.add(new ResizeCommand());
composite.add(new BlackAndWhiteCommand());

composite.execute();