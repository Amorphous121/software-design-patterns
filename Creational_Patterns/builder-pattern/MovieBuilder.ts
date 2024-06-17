import { MovieDocument } from "./MovieDocument";
import { Slide } from "./Slide";
import { PresentationBuilder } from "./presentation-builder.interface";

export class MovieBuilder implements PresentationBuilder {
  private movie = new MovieDocument();

  addSlide(slide: Slide): void {
    this.movie.addFrame(slide.getText(), 3);
  }

  getMovie(): MovieDocument {
    return this.movie;
  }
}
