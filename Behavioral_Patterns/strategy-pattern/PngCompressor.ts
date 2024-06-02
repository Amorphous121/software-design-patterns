import { Compressor } from "./interface";

export class PngCompressor implements Compressor {
  compress(fileName: string): void {
    console.log("Compressing using PNG");
  }
}
