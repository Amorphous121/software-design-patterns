import { RealEbook } from "./RealEbook";
import { IEbook } from "./ebook.interface";

export class LoggingEbookProxy implements IEbook {
  private _ebook: RealEbook | null = null;

  constructor(private fileName: string) {}

  getFileName(): string {
    return this.fileName;
  }

  show(): void {
    if (this._ebook === null) {
      this._ebook = new RealEbook(this.fileName);
    }

    console.log("Logging");
    this._ebook.show();
  }
}
