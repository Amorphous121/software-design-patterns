import { CloudStream } from "./CloudStream";
import { IStream } from "./stream.interface";

export class EncryptedCloudStream implements IStream {
  constructor(private stream: IStream) {}

  public write(data: string): void {
    const encrypted = this.encrypt(data);
    this.stream.write(encrypted);
  }

  private encrypt(data: string): string {
    return "!@$#@%#^$%&%^";
  }
}
