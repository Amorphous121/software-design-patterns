import { IEbook } from "./ebook.interface";

export class RealEbook implements IEbook {
  constructor(private fileName: string) {
    this.load();
  }

  private load(): void {
    console.log("Loading the ebook ", this.fileName);
  }

  public show(): void {
    console.log("Showing the ebook ", this.fileName);
  }

  public getFileName(): string {
    return this.fileName;
  }
}
