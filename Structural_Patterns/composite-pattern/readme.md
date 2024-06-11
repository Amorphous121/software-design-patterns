---

# Composite Design Pattern Example

This project demonstrates the implementation of the Composite Design Pattern in TypeScript. The Composite Pattern allows you to compose objects into tree structures to represent part-whole hierarchies. It lets clients treat individual objects and compositions of objects uniformly.

## Components of the Composite Pattern

1. **Component**: An interface that declares operations that can be implemented by both simple and complex objects.
2. **Leaf**: Represents leaf objects in the composition. A leaf can't have any children.
3. **Composite**: Represents complex components that may have children. These components can contain both other composites and leaves.

## Class Diagram

Below is a class diagram for the Composite Pattern implementation:

![Composite Pattern Class Diagram](/images/composite-pattern.png)

## Classes and Implementation

### Component Interface

The `IComponent` interface declares common operations for both simple and complex objects in the composition.

```typescript
interface IComponent {
  render(): void;
  move(): void;
}
```

### Leaf

`Shape` is a leaf component that implements the `IComponent` interface.

```typescript
class Shape implements IComponent {
  public render() {
    console.log("Render Shape");
  }

  public move() {
    console.log('Moving a shape')
  }
}
```

### Composite

`Group` is a composite component that can contain other components, both leaves and composites.

```typescript
class Group implements IComponent {
  constructor(private components: IComponent[] = []) {}

  public add(component: IComponent): void {
    this.components.push(component);
  }

  public render(): void {
    for (const component of this.components) {
      component.render();
    }
  }

  public move() {
    for (const component of this.components) {
        component.move();
      }
  }
}
```

### Client

The client code creates a complex tree structure and performs operations on it.

```typescript
const group1 = new Group();
group1.add(new Shape()); // square
group1.add(new Shape()); // square

const group2 = new Group();
group2.add(new Shape()); // circle
group2.add(new Shape()); // circle

const group3 = new Group();

group3.add(group1);
group3.add(group2);

group3.render();
group3.move();
```

## Conclusion

The Composite Pattern is useful for building complex structures of objects where individual objects and compositions of objects can be treated uniformly. This example demonstrates how the pattern can be applied to manage a hierarchy of shapes efficiently.

---