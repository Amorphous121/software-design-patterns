import { CloudStream } from "./CloudStream";
import { IStream } from "./stream.interface";

export class CompressedCloudStream implements IStream {
  constructor(private stream: IStream) {}

  public write(data: string): void {
    const compressed = this.compress(data);
    console.log(compressed, '---------------')
    this.stream.write(compressed);
  }

  private compress(data: string): string {
    return data.slice(0, 4);
  }
}
