# Flyweight Design Pattern Example

This project demonstrates the implementation of the Flyweight Design Pattern in TypeScript. The Flyweight Pattern is used to minimize memory usage or computational expenses by sharing as much data as possible with similar objects.

## Components of the Flyweight Pattern

1. **Flyweight**: Represents the shared object that can be used in multiple contexts simultaneously. In this example, the `PointIcon` class is the Flyweight.
2. **ConcreteFlyweight**: Implements the Flyweight interface and adds storage for intrinsic state. In this example, the `PointIcon` class also acts as the ConcreteFlyweight.
3. **FlyweightFactory**: Creates and manages Flyweight objects. In this example, the `PointIconFactory` class is the FlyweightFactory.
4. **Client**: Maintains references to Flyweight objects and computes their extrinsic state. In this example, the `Point` class is the client.

## Class Diagram

Below is a class diagram for the Flyweight Pattern implementation:

![Flyweight Pattern Class Diagram](/images/flyweight-pattern.png)

## Classes and Implementation

### PointType (Enum)

This enum defines different types of points, such as hospital, cafe, and restaurant.

```typescript
enum PointType {
  HOSPITAL,
  CAFE,
  RESTAURANT,
}
```

### PointIcon (Flyweight)

This class represents the flyweight that is shared among multiple `Point` objects. It contains intrinsic state, which is the type of the point and its icon.

```typescript
class PointIcon {
  constructor(
    private readonly type: PointType,
    private readonly icon: Buffer
  ) {}

  public getType() {
    return this.type;
  }
}
```

### Point (Client)

This class represents a point on a map. It contains extrinsic state, such as the coordinates of the point, and a reference to the shared `PointIcon`.

```typescript
class Point {
  constructor(
    private x: number,
    private y: number,
    private pointIcon: PointIcon
  ) {}

  public draw(): void {
    console.log(`${this.pointIcon.getType()} at (${this.x}, ${this.y})`);
  }
}
```

### PointIconFactory (FlyweightFactory)

This class creates and manages `PointIcon` objects. It ensures that the same `PointIcon` is shared among multiple `Point` objects to save memory.

```typescript
class PointIconFactory {
  private icons: Map<PointType, PointIcon> = new Map();

  public getPointIcon(type: PointType): PointIcon {
    if (!this.icons.has(type)) {
      const icon = new PointIcon(type, Buffer.from(`${type}`));
      this.icons.set(type, icon);
    }

    return this.icons.get(type)!;
  }
}
```

### PointService

This class creates `Point` objects using the `PointIconFactory` to obtain shared `PointIcon` instances.

```typescript
class PointService {
  constructor(private iconFactory: PointIconFactory) {}

  public getPoints(): Point[] {
    return [new Point(1, 2, this.iconFactory.getPointIcon(PointType.CAFE))];
  }
}
```

## Usage Example

Below is an example of how to use the implemented classes to create points on a map, share icons among them, and draw the points.

```typescript
const iconFactory = new PointIconFactory();
const pointService = new PointService(iconFactory);

const points = pointService.getPoints();

for (const point of points) {
  point.draw();
}
```

## Conclusion

The Flyweight Pattern is useful for reducing memory usage by sharing as much data as possible with similar objects. This example demonstrates how the pattern can be applied to a map application to manage and render points efficiently.
