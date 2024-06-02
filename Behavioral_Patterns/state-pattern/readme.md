Here's a README file including a PlantUML class diagram for the State design pattern using the provided code:

---

# State Design Pattern Example

This project demonstrates the implementation of the State Design Pattern in TypeScript. The State Pattern is used to allow an object to alter its behavior when its internal state changes. The object will appear to change its class.

## Components of the State Pattern

1. **State Interface**: Defines an interface for encapsulating the behavior associated with a particular state of the Context. In this example, `ITool` is the State interface.
2. **Concrete States**: Implement the behavior associated with a state of the Context. Here, `SelectionTool`, `PencilTool`, and `EraseTool` are the Concrete States.
3. **Context**: Maintains an instance of a Concrete State subclass that defines the current state. The `Canvas` class is the Context in this example.

## Class Diagram

Below is a class diagram for the State Pattern implementation:

![Strategy Pattern Class Diagram](/images/state-pattern.png)

## Classes and Implementation

### ITool (State Interface)

This interface defines the methods that all concrete states must implement.

```typescript
interface ITool {
  mouseUp(): void;
  mouseDown(): void;
}
```

### SelectionTool (Concrete State)

This class implements the `ITool` interface and provides behavior for the selection tool.

```typescript
class SelectionTool implements ITool {
  mouseUp(): void {
    console.log("Selection Tool mouse-up event fired");
  }

  mouseDown(): void {
    console.log("Selection Tool mouse-down event fired");
  }
}
```

### PencilTool (Concrete State)

This class implements the `ITool` interface and provides behavior for the pencil tool.

```typescript
class PencilTool implements ITool {
  mouseDown(): void {
    console.log("Pencil tool mouse-down event fired");
  }

  mouseUp(): void {
    console.log("Pencil tool mouse-up event fired");
  }
}
```

### EraseTool (Concrete State)

This class implements the `ITool` interface and provides behavior for the erase tool.

```typescript
class EraseTool implements ITool {
  mouseUp(): void {
    console.log("Erase tool mouse-up event fired");
  }

  mouseDown(): void {
    console.log("Erase tool mouse-down event fired");
  }
}
```

### Canvas (Context)

This class maintains an instance of a Concrete State subclass that defines the current state.

```typescript
class Canvas {
  constructor(private currentTool: ITool) {}

  setCurrentTool(tool: ITool): void {
    this.currentTool = tool;
  }

  getCurrentTool(): ITool {
    return this.currentTool;
  }

  mouseUp(): void {
    this.currentTool.mouseUp();
  }

  mouseDown(): void {
    this.currentTool.mouseDown();
  }
}
```


## Usage Example

Below is an example of how to use the implemented classes to manage different tool states in a canvas.

```typescript
const canvas = new Canvas(new SelectionTool());

canvas.mouseDown(); // Output: Selection Tool mouse-down event fired
canvas.mouseUp();   // Output: Selection Tool mouse-up event fired

canvas.setCurrentTool(new PencilTool());
canvas.mouseDown(); // Output: Pencil tool mouse-down event fired
canvas.mouseUp();   // Output: Pencil tool mouse-up event fired

canvas.setCurrentTool(new EraseTool());
canvas.mouseDown(); // Output: Erase tool mouse-down event fired
canvas.mouseUp();   // Output: Erase tool mouse-up event fired
```

## Conclusion

The State Pattern is useful for allowing an object to change its behavior when its internal state changes. This example demonstrates how the pattern can be applied to a drawing application with different tools.

---

Feel free to adjust or expand it according to your needs!