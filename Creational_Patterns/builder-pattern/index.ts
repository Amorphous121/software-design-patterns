import { Slide } from "./Slide";
import { Presentation } from "./Presentation";
import { PdfDocumentBuilder } from "./PdfDocumentBuilder";

const presentation = new Presentation();

presentation.addSlide(new Slide("Slide 1"));
presentation.addSlide(new Slide("Slide 2"));
presentation.addSlide(new Slide("Slide 3"));
presentation.addSlide(new Slide("Slide 4"));

const builder = new PdfDocumentBuilder();
presentation.export(builder);
builder.getPdfDocument();
