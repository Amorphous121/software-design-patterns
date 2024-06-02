import { BlackAndWhiteFilter } from "./BlackAndWhiteFilter";
import { ImageStorage } from "./ImageStorage";
import { JpedCompressor } from "./JpegCompressor";
import { PngCompressor } from "./PngCompressor";

const imageStorage = new ImageStorage();

imageStorage.store(
  "profile.webp",
  new JpedCompressor(),
  new BlackAndWhiteFilter()
);

imageStorage.store(
  "profile.webp",
  new PngCompressor(),
  new BlackAndWhiteFilter()
);
