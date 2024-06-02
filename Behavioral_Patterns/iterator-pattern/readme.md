---

# Iterator Design Pattern Example

This project demonstrates the implementation of the Iterator Design Pattern in TypeScript. The Iterator Pattern is used to provide a way to access the elements of an aggregate object sequentially without exposing its underlying representation.

## Components of the Iterator Pattern

1. **Iterator**: Defines an interface for accessing and traversing elements. In this example, `IIterator` is the Iterator interface.
2. **Concrete Iterator**: Implements the `Iterator` interface and is responsible for the actual traversal of the aggregate object. Here, the `Iterator` class is the Concrete Iterator.
3. **Aggregate**: Defines an interface for creating an Iterator object. In this example, `BrowseHistory` acts as the Aggregate.
4. **Concrete Aggregate**: Implements the `Aggregate` interface and returns an instance of the Concrete Iterator. The `BrowseHistory` class serves this purpose by creating an `Iterator` for its collection of URLs.

## Class Diagram

Below is a class diagram for the Momento Pattern implementation:

![Strategy Pattern Class Diagram](/images/iterator-pattern.png)

## Classes and Implementation

### IIterator (Iterator Interface)

This interface defines the methods required for iterating over a collection.

```typescript
interface IIterator<T> {
  hasNext(): boolean;
  next(): void;
  current(): T;
}
```

### Iterator (Concrete Iterator)

This class implements the `IIterator` interface and provides the functionality to traverse the collection.

```typescript
class Iterator<T> implements IIterator<T> {
  private position: number = 0;
  private length: number;

  constructor(private list: T[]) {
    this.length = list.length;
  }

  current(): T {
    return this.list[this.position];
  }

  hasNext(): boolean {
    return this.position < this.length;
  }

  next(): void {
    ++this.position;
  }
}
```

### BrowseHistory (Concrete Aggregate)

This class represents a collection of URLs and provides a method to create an `Iterator` for this collection.

```typescript
class BrowseHistory {
  constructor(private urls: string[] = []) {}

  push(url: string): void {
    this.urls.push(url);
  }

  pop(): string | undefined {
    return this.urls.pop();
  }

  createIterator(): Iterator<string> {
    return new Iterator<string>(this.urls);
  }
}
```

## Usage Example

Below is an example of how to use the implemented classes to manage browsing history and iterate over the stored URLs.

```typescript
const history = new BrowseHistory();
history.push("http://example.com");
history.push("http://example.org");
history.push("http://example.net");

const iterator = history.createIterator();

while (iterator.hasNext()) {
  console.log(iterator.current());
  iterator.next();
}
```

## Conclusion

The Iterator Pattern is useful for accessing elements of a collection without exposing its underlying structure. This example demonstrates how the pattern can be applied to manage and iterate over a browsing history.

---