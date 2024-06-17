
# Factory Pattern

The Factory Pattern is a creational design pattern that provides an interface for creating objects in a superclass but allows subclasses to alter the type of objects that will be created. This pattern promotes loose coupling by eliminating the need to bind application-specific classes into the code.

## Components of the Factory Pattern

1. **Product Interface (ViewEngine)**: Defines the interface for the type of object the factory method creates.
2. **Concrete Products (MatchaViewEngine, SharpViewEngine)**: Implement the Product interface.
3. **Creator (Controller)**: Declares the factory method, which returns an object of type Product. The Creator may also define a default implementation of the factory method that returns a default Concrete Product.
4. **Concrete Creator (SharpController)**: Overrides the factory method to return an instance of a Concrete Product.

## Class Diagram

Below is a class diagram for the Factory Pattern implementation:

![Factory Pattern Class Diagram](/images/factory-pattern.png)

## Implementation

### 1. Product Interface

The `ViewEngine` interface defines the method that all concrete products must implement.

```typescript
interface ViewEngine {
    render(viewName: string, data: Map<string, any>): string;
}
```

### 2. Concrete Products

`MatchaViewEngine` and `SharpViewEngine` implement the `ViewEngine` interface.

```typescript
class MatchaViewEngine implements ViewEngine {
    public render(viewName: string, data: Map<string, any>): string {
        return 'View rendered by Matcha';
    }
}

class SharpViewEngine implements ViewEngine {
    public render(viewName: string, data: Map<string, any>): string {
        return 'View rendered by Sharp';
    }
}
```

### 3. Creator

The `Controller` class declares the factory method `createViewEngine`, which returns a `ViewEngine` object. Subclasses of `Controller` will provide the implementation for this method.

```typescript
class Controller {
    public render(viewName: string, data: Map<string, any>): void {
        const engine = this.createViewEngine();
        const html = engine.render(viewName, data);
        console.log(html);
    }

    // protected abstract createViewEngine(): ViewEngine;

    protected createViewEngine(): ViewEngine {
        return new MatchaViewEngine();
    }
}
```

### 4. Concrete Creator

The `SharpController` class overrides the `createViewEngine` method to return an instance of `SharpViewEngine`.

```typescript
class SharpController extends Controller {
    protected createViewEngine(): ViewEngine {
        return new SharpViewEngine();
    }
}
```

### Example Usage

The `ProductsController` class demonstrates how to use the factory method to create and use a specific `ViewEngine`.

```typescript
class ProductsController extends SharpController {
    public listProduct(): void {
        const context = new Map();
        this.render('products.html', context);
    }
}
```

### Main

Here’s how you might use these classes together:

```typescript
const productsController = new ProductsController();
productsController.listProduct();
```

In this example, the `ProductsController` uses the `SharpController`, which in turn uses the `SharpViewEngine` to render views.

## Summary

The Factory Pattern allows you to encapsulate the instantiation logic and makes it easier to manage and extend with new product types. It helps in adhering to the Open/Closed Principle by allowing the creation of new product types without modifying the existing code.