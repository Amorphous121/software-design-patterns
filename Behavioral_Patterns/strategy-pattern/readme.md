---

# Strategy Design Pattern Example

This project demonstrates the implementation of the Strategy Design Pattern in TypeScript. The Strategy Pattern is used to define a family of algorithms, encapsulate each one, and make them interchangeable. This pattern allows the algorithm to vary independently from the clients that use it.

## Components of the Strategy Pattern

1. **Strategy**: Defines a common interface for all supported algorithms. In this example, `Compressor` and `Filter` interfaces serve as strategies.
2. **Concrete Strategies**: Implement the Strategy interface. Here, `JpegCompressor`, `PngCompressor`, and `BlackAndWhiteFilter` are concrete strategies.
3. **Context**: Is configured with a ConcreteStrategy object and maintains a reference to a Strategy object. Here, the `ImageStorage` class is the context.

## Class Diagram

Below is a class diagram for the Strategy Pattern implementation:

![Strategy Pattern Class Diagram](//www.plantuml.com/plantuml/dpng/hP2zIi0m4CVtFCMDYcqV83XK1K474HoSGtgjmSi7kQiWwhjRQf3KYaDn2k7Fx_znFOl9CdjIBWZcqLY4g-XJHkQOuKq1dDdoFnaTuPtng84bkp2TQdY9Rb0VggAl7GaMqgH4htzXbWmpt2QSgb3d4w7787oaIl6y3_zkUKd6Fb-4uV792PQPbV61uJVUJFWWCI_F5yZB1tTW0_QxjQuMD32keRg4Lm7LpFFthljnuvsyEPTQtOhoosgrwHtRjggqrmhJOnXcJvy0)

## Classes and Implementation

### Compressor Interface (Strategy)

This interface defines the `compress` method that all concrete compressors must implement.

```typescript
export interface Compressor {
  compress(fileName: string): void;
}
```

### Filter Interface (Strategy)

This interface defines the `apply` method that all concrete filters must implement.

```typescript
export interface Filter {
  apply(fileName: string): void;
}
```

### Concrete Strategies

These classes implement the `Compressor` and `Filter` interfaces.

#### JpegCompressor

```typescript
export class JpegCompressor implements Compressor {
  compress(fileName: string): void {
    console.log("Compressing using JPEG");
  }
}
```

#### PngCompressor

```typescript
export class PngCompressor implements Compressor {
  compress(fileName: string): void {
    console.log("Compressing using PNG");
  }
}
```

#### BlackAndWhiteFilter

```typescript
export class BlackAndWhiteFilter implements Filter {
  apply(fileName: string): void {
    console.log("Applying Black and White filter");
  }
}
```

### ImageStorage (Context)

This class uses a `Compressor` and `Filter` strategy to store images.

```typescript
export class ImageStorage {
  constructor() {}

  public store(fileName: string, compressor: Compressor, filter: Filter) {
    compressor.compress(fileName);
    filter.apply(fileName);
    console.log("File is stored");
  }
}
```

## Usage Example

Below is an example of how to use the implemented classes to compress and filter images using different strategies.

```typescript
const imageStorage = new ImageStorage();

const jpegCompressor = new JpegCompressor();
const pngCompressor = new PngCompressor();
const bwFilter = new BlackAndWhiteFilter();

imageStorage.store("image1.jpg", jpegCompressor, bwFilter);
// Output:
// Compressing using JPEG
// Applying Black and White filter
// File is stored

imageStorage.store("image2.png", pngCompressor, bwFilter);
// Output:
// Compressing using PNG
// Applying Black and White filter
// File is stored
```

## Conclusion

The Strategy Pattern allows for defining a family of algorithms and making them interchangeable. This example demonstrates how the pattern can be applied to an image storage system where different compression and filter strategies can be used independently.

---

If you have any more design patterns to document or need further assistance, feel free to ask!