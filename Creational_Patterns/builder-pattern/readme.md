---

# Builder Pattern

The Builder pattern is a creational design pattern that allows you to construct complex objects step by step. It separates the construction of a complex object from its representation, enabling the same construction process to create various representations.

## Intent

The Builder pattern aims to:
- Separate the construction of a complex object from its representation.
- Allow the same construction process to create different representations.

## Components

1. **Builder Interface**: Specifies the methods for creating parts of a complex object.
2. **Concrete Builder**: Implements the builder interface and constructs and assembles parts of the product.
3. **Product**: Represents the complex object being constructed.
4. **Director**: Constructs an object using the builder interface.

## Example in TypeScript


## Class Diagram

Below is a class diagram for the Builder Pattern implementation:

![Builder Pattern Class Diagram](/images/builder-pattern.png)

### Components of the Pattern

1. **Slide**: Represents a slide in a presentation.
2. **PresentationBuilder Interface**: Specifies the methods for building parts of the presentation.
3. **PdfDocumentBuilder and MovieBuilder**: Concrete builders implementing the `PresentationBuilder` interface.
4. **Presentation**: Acts as the Director in this example, which constructs the presentation using the builder interface.
5. **PdfDocument and MovieDocument**: Products being created by the builders.

### Implementation

```typescript
interface PresentationBuilder {
  addSlide(slide: Slide): void;
}

class Slide {
  constructor(private text: string) {}

  getText(): string {
    return this.text;
  }
}

class Presentation {
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

class PdfDocumentBuilder implements PresentationBuilder {
  private document = new PdfDocument();

  addSlide(slide: Slide): void {
    this.document.addPage(slide.getText());
  }

  getPdfDocument(): PdfDocument {
    return this.document;
  }
}

class PdfDocument {
  public addPage(text: string): void {
    console.log("Adding a page to PDF");
  }
}

class MovieDocument {
  public addFrame(text: string, duration: number): void {
    console.log("Adding a frame to the movie");
  }
}

class MovieBuilder implements PresentationBuilder {
  private movie = new MovieDocument();

  addSlide(slide: Slide): void {
    this.movie.addFrame(slide.getText(), 3);
  }

  getMovie(): MovieDocument {
    return this.movie;
  }
}

// Usage
const presentation = new Presentation();
presentation.addSlide(new Slide("Slide 1"));
presentation.addSlide(new Slide("Slide 2"));

const pdfBuilder = new PdfDocumentBuilder();
presentation.export(pdfBuilder);
const pdf = pdfBuilder.getPdfDocument();

const movieBuilder = new MovieBuilder();
presentation.export(movieBuilder);
const movie = movieBuilder.getMovie();
```

### How It Works

1. **Slide Class**: Represents a slide with text content.
2. **PresentationBuilder Interface**: Defines the method `addSlide` for adding slides to the presentation.
3. **PdfDocumentBuilder and MovieBuilder**: Concrete builders that implement the `PresentationBuilder` interface. They construct different representations of the presentation (PDF and Movie).
4. **Presentation Class**: Acts as the director that constructs the presentation. It uses the builder interface to add slides to the presentation.
5. **PdfDocument and MovieDocument**: Different products being built by the concrete builders.

This implementation allows for flexible and scalable construction of complex objects (presentations) with different representations (PDF and Movie) using the same construction process.

---
