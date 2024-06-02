import { Compressor, Filter } from "./interface";

export class ImageStorage {
  constructor() {}

  public store(fileName: string, compressor: Compressor, filter: Filter) {
    compressor.compress(fileName);
    filter.apply(fileName);
    console.log("File is stored");
  }
}
