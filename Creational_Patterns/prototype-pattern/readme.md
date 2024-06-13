# Prototype Pattern

## Overview

The Prototype Pattern is a creational design pattern that allows cloning of objects without coupling to their specific classes. The primary goal is to create new objects by copying an existing object, known as the prototype. This approach is useful when the cost of creating a new object is expensive or complex.

## Components of the Prototype Pattern

1. **Prototype Interface (IComponent)**: Defines the `clone` method that should be implemented by all concrete prototypes.
2. **Concrete Prototype (Circle)**: Implements the `IComponent` interface and the `clone` method to return a copy of the object.
3. **Client (ContextMenu)**: Uses the prototype to create new objects by cloning an existing object.


## Class Diagram

Below is a class diagram for the Prototype Pattern implementation:

![Prototype Pattern Class Diagram](/images/prototype-pattern.png)

## Implementation

Here's an example of the Prototype Pattern implemented in TypeScript:

```typescript
interface IComponent {
  render(): void;
  clone(): IComponent;
}

class Circle implements IComponent {
  private radius: number = 0;

  public getRadius(): number {
    return this.radius;
  }

  public setRadius(radius: number): void {
    this.radius = radius;
  }

  render(): void {
    console.log("Rendering a circle");
  }

  clone(): IComponent {
    const newCircle = new Circle();
    newCircle.setRadius(this.radius);
    return newCircle;
  }
}

class ContextMenu {
  public duplicate(component: IComponent): void {
    const newComponent = component.clone();
    console.log(`Duplicating component: ${newComponent.render()}`);
  }
}
```

### How it works

1. **IComponent Interface**: This interface defines the `render` and `clone` methods. Any class that wants to be cloneable should implement this interface.
   
   ```typescript
   interface IComponent {
     render(): void;
     clone(): IComponent;
   }
   ```

2. **Circle Class**: Implements the `IComponent` interface. It includes a `clone` method that creates a new instance of `Circle` and copies the existing state (in this case, `radius`).
   
   ```typescript
   class Circle implements IComponent {
     private radius: number = 0;

     public getRadius(): number {
       return this.radius;
     }

     public setRadius(radius: number): void {
       this.radius = radius;
     }

     render(): void {
       console.log("Rendering a circle");
     }

     clone(): IComponent {
       const newCircle = new Circle();
       newCircle.setRadius(this.radius);
       return newCircle;
     }
   }
   ```

3. **ContextMenu Class**: Acts as the client that utilizes the `clone` method to duplicate components.
   
   ```typescript
   class ContextMenu {
     public duplicate(component: IComponent): void {
       const newComponent = component.clone();
       console.log(`Duplicating component: ${newComponent.render()}`);
     }
   }
   ```

### Usage

To use the prototype pattern, create an instance of the `Circle` class, set its properties, and then use the `ContextMenu` to duplicate it.

```typescript
const circle = new Circle();
circle.setRadius(5);

const contextMenu = new ContextMenu();
contextMenu.duplicate(circle);
```

This code demonstrates the Prototype Pattern by defining a `Circle` class that can be cloned, allowing the creation of new instances based on the prototype's state. The `ContextMenu` class uses the prototype's `clone` method to duplicate the component.