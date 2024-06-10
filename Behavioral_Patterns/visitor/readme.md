# Visitor Design Pattern Example

This project demonstrates the implementation of the Visitor Design Pattern in TypeScript. The Visitor Pattern allows you to add further operations to objects without having to modify them, by passing the objects through a visiting class.

## Components of the Visitor Pattern

1. **Visitor**: Defines an interface for visiting elements. For each type of element, a corresponding visit method is declared.
2. **ConcreteVisitor**: Implements each operation declared by the Visitor interface. Each operation implements a fragment of the algorithm operating on the elements.
3. **Element**: Defines an interface for accepting visitor objects.
4. **ConcreteElement**: Implements the accept method defined in the Element interface. Each concrete element class calls the visiting operation corresponding to its class.

## Class Diagram

Below is a class diagram for the Visitor Pattern implementation:

![Visitor Pattern Class Diagram](/images/visitor-pattern.png)

## Classes and Implementation

### Visitor Interface

The `Visitor` interface declares visit operations for each type of concrete element class.

```typescript
interface Visitor {
  applyHeadingNode(heading: HeadingNode): void;
  applyAnchorNode(anchor: AnchorNode): void;
}
```

### HtmlNode Interface

The `HtmlNode` interface declares an `execute` method that accepts a visitor.

```typescript
interface HtmlNode {
  execute(visitor: Visitor): void;
}
```

### Concrete Elements

`AnchorNode` and `HeadingNode` are concrete elements that implement the `HtmlNode` interface.

```typescript
class AnchorNode implements HtmlNode {
  execute(visitor: Visitor): void {
    visitor.applyAnchorNode(this);
  }
}

class HeadingNode implements HtmlNode {
  execute(visitor: Visitor): void {
    visitor.applyHeadingNode(this);
  }
}
```

### Concrete Visitors

`Highlight` and `PlainTextOperation` are concrete visitors that implement the `Visitor` interface.

```typescript
class Highlight implements Visitor {
  applyAnchorNode(anchor: AnchorNode): void {
    console.log("highlight-anchor");
  }

  applyHeadingNode(heading: HeadingNode): void {
    console.log("highlight-heading");
  }
}

class PlainTextOperation implements Visitor {
  applyAnchorNode(anchor: AnchorNode): void {
    console.log("text-anchor");
  }
  
  applyHeadingNode(heading: HeadingNode): void {
    console.log("text-heading");
  }
}
```

### HtmlDocument Class

`HtmlDocument` is the object structure that can be traversed by a visitor.

```typescript
class HtmlDocument {
  constructor(private nodes: HtmlNode[] = []) {}

  public add(node: HtmlNode): void {
    this.nodes.push(node);
  }

  public execute(visitor: Visitor): void {
    for (const node of this.nodes) {
      node.execute(visitor);
    }
  }
}
```

## Usage Example

Below is an example of how to use the implemented classes to create a document with nodes and apply visitors to these nodes.

```typescript
const document = new HtmlDocument();
document.add(new AnchorNode());
document.add(new HeadingNode());

const highlight = new Highlight();
document.execute(highlight); // Output: highlight-anchor, highlight-heading

const plainText = new PlainTextOperation();
document.execute(plainText); // Output: text-anchor, text-heading
```


## Conclusion

The Visitor Pattern is useful for performing operations across a set of objects with varying types. It allows you to define new operations without changing the classes of the elements on which it operates. This example demonstrates how the pattern can be applied to HTML nodes for different operations like highlighting and converting to plain text.