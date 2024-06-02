export interface Compressor {
  compress(fileName: string): void;
}

export interface Filter {
  apply(fileName: string): void;
}
