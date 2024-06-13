import { IEbook } from "./ebook.interface";

export class Library {
  constructor(private ebooks: Map<string, IEbook> = new Map()) {}

  public add(ebook: IEbook): void {
    this.ebooks.set(ebook.getFileName(), ebook);
  }

  public openEbook(fileName: string): void {
    if (this.ebooks.has(fileName)) {
      this.ebooks.get(fileName)!.show();
    }
  }
}
