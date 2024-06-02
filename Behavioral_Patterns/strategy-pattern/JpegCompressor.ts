import { Compressor } from "./interface";

export class JpedCompressor implements Compressor {
  compress(fileName: string): void {
    console.log("Compressing using JPEG");
  }
}
