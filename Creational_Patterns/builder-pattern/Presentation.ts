import { Slide } from "./Slide";
import { PresentationBuilder } from "./presentation-builder.interface";

export class Presentation {
  constructor(private slides: Array<Slide> = []) {}

  public addSlide(slide: Slide): void {
    this.slides.push(slide);
  }

  public export(builder: PresentationBuilder): void {
    builder.addSlide(new Slide("Copyright"));
    for (const slide of this.slides) {
      builder.addSlide(slide);
    }
  }
}
