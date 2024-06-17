import { Slide } from "./Slide";

export interface PresentationBuilder {
  addSlide(slide: Slide): void;
}
