---

# Adapter Design Pattern Example

This project demonstrates the implementation of the Adapter Design Pattern in TypeScript. The Adapter Pattern allows incompatible interfaces to work together by converting the interface of a class into another interface that a client expects.

## Components of the Adapter Pattern

1. **Target Interface**: This is the interface that clients expect. In this example, the `IFilter` interface is the target interface.
2. **Client**: The class that interacts with the target interface. Here, the `ImageView` class is the client.
3. **Adaptee**: The existing class with a different interface. In this example, the `Caramel` class is the adaptee.
4. **Adapter**: A class that implements the target interface and translates the calls to the adaptee. Here, the `CaramelFilter` class is the adapter.

## Class Diagram

Below is a class diagram for the Adapter Pattern implementation:

![Ada[ter] Pattern Class Diagram](/images/adapter-pattern.png)


## Classes and Implementation

### IFilter (Target Interface)

This interface defines the `apply` method that all filters must implement.

```typescript
interface IFilter {
  apply(image: Image): void;
}
```

### ImageView (Client)

This class uses objects that implement the `IFilter` interface.

```typescript
class ImageView {
  constructor(private image: Image) {}

  public apply(filter: IFilter): void {
    filter.apply(this.image);
  }
}
```

### VividFilter (Concrete Implementation of Target Interface)

This class implements the `IFilter` interface directly.

```typescript
class VividFilter implements IFilter {
  apply(image: Image): void {
    console.log("Applying vivid filter");
  }
}
```

### Caramel (Adaptee)

This class has a different interface than what the client expects.

```typescript
class Caramel {
  public init(): void {}

  public render(image: Image): void {
    console.log('Applying Caramel Filter');
  }
}
```

### CaramelFilter (Adapter)

This class adapts the `Caramel` class to the `IFilter` interface.

```typescript
class CaramelFilter implements IFilter {
  constructor(private caramel: Caramel) {}

  apply(image: Image): void {
    this.caramel.init();
    this.caramel.render(image);
  }
}
```

## Usage Example

Below is an example of how to use the implemented classes to apply filters to an image.

```typescript
const image = new Image();
const imageView = new ImageView(image);

const vividFilter = new VividFilter();
imageView.apply(vividFilter);

const caramel = new Caramel();
const caramelFilter = new CaramelFilter(caramel);
imageView.apply(caramelFilter);
```

## Conclusion

The Adapter Pattern is useful when you need to integrate a class that has an incompatible interface with your system. This example demonstrates how to create an adapter (`CaramelFilter`) to make the `Caramel` class compatible with the `IFilter` interface, allowing it to be used with the `ImageView` class.

---