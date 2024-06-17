import { Slide } from "./Slide";
import { PdfDocument } from "./PdfDocument";
import { PresentationBuilder } from "./presentation-builder.interface";

export class PdfDocumentBuilder implements PresentationBuilder {
  private document = new PdfDocument();

  addSlide(slide: Slide): void {
    this.document.addPage(slide.getText());
  }

  getPdfDocument(): PdfDocument {
    return this.document;
  }
}
