import { IStream } from "./stream.interface";

export class CloudStream implements IStream {
  public write(data: String) {
    console.log("Storing ", data);
  }
}
