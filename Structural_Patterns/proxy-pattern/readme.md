---

# Proxy Pattern

The Proxy Pattern provides a surrogate or placeholder for another object to control access to it. This pattern helps in managing the access to an object that may be expensive to instantiate or may require additional functionality like logging or access control.


## Class Diagram

Below is a class diagram for the Proxy Pattern implementation:

![Proxy Pattern Class Diagram](/images/proxy-pattern.png)

## Components of the Proxy Pattern

1. **Subject**: This is an interface that defines the common operations for `RealSubject` and `Proxy`.
2. **RealSubject**: The actual object that performs the real operations.
3. **Proxy**: The object that controls access to the `RealSubject`. It can add additional behavior such as lazy loading, access control, or logging.

## Example

In this example, we have an `IEbook` interface that is implemented by both `RealEbook` and its proxies `EbookProxy` and `LoggingEbookProxy`.

### Interface

```typescript
interface IEbook {
  show(): void;
  getFileName(): string;
}
```

### RealEbook

The `RealEbook` class represents the actual eBook that needs to be loaded and shown.

```typescript
class RealEbook implements IEbook {
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
```

### EbookProxy

The `EbookProxy` class controls access to the `RealEbook` object. It instantiates `RealEbook` only when necessary.

```typescript
class EbookProxy implements IEbook {
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
```

### LoggingEbookProxy

The `LoggingEbookProxy` class adds logging functionality when an eBook is accessed.

```typescript
class LoggingEbookProxy implements IEbook {
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
```

### Library

The `Library` class manages a collection of eBooks, which can be accessed through their proxies.

```typescript
class Library {
  constructor(private ebooks: Map<string, IEbook> = new Map()) {}

  public add(ebook: IEbook): void {
    this.ebooks.set(ebook.getFileName(), ebook);
  }

  public openEbook(fileName: string): void {
    if (this.ebooks.has(fileName)) {
      this.ebooks.get(fileName)!.show();
    }
  }
}
```

### Usage

Here is how you can use the above classes:

```typescript
const library = new Library();

const ebook1 = new EbookProxy("book1.pdf");
const ebook2 = new LoggingEbookProxy("book2.pdf");

library.add(ebook1);
library.add(ebook2);

library.openEbook("book1.pdf"); // Loading the ebook book1.pdf
                                // Showing the ebook book1.pdf

library.openEbook("book2.pdf"); // Logging
                                // Loading the ebook book2.pdf
                                // Showing the ebook book2.pdf
```

This example demonstrates the use of the Proxy Pattern to manage access to a `RealEbook` object, adding functionality such as lazy loading and logging.

---