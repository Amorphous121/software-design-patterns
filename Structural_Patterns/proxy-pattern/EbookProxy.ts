import { RealEbook } from "./RealEbook";
import { IEbook } from "./ebook.interface";

export class EbookProxy implements IEbook {
  private _ebook: RealEbook | null = null;

  constructor(private fileName: string) {}

  show(): void {
    if (this._ebook === null) {
      this._ebook = new RealEbook(this.fileName);
    }

    this._ebook.show();
  }

  getFileName(): string {
    return this.fileName;
  }
}
