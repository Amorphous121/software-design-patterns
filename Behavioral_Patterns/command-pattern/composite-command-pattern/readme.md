---

# Composite Command Design Pattern Example

This project demonstrates the implementation of the Composite Command Design Pattern in TypeScript. The Composite Command Pattern allows you to compose multiple commands into a single command. It provides a way to treat individual objects and compositions of objects uniformly.

## Components of the Composite Command Pattern

1. **Command Interface**: Defines the interface for executing an operation. In this example, `ICommand` is the Command interface.
2. **Concrete Commands**: Implement the Command interface to perform specific actions. In this example, `ResizeCommand`, `CropCommand`, and `BlackAndWhiteCommand` are the Concrete Commands.
3. **Composite Command**: Implements the Command interface to execute a sequence of commands. In this example, `CompositeCommand` is the Composite Command.

## Class Diagram

Below is a class diagram for the Composite Command Pattern implementation:

![Composite Command Pattern Class Diagram](/images/composite-command-pattern.png)

## Classes and Implementation

### ICommand (Command Interface)

This interface defines the method required for executing a command.

```typescript
interface ICommand {
  execute(): void;
}
```

### ResizeCommand (Concrete Command)

This class implements the `ICommand` interface to resize a window.

```typescript
class ResizeCommand implements ICommand {
  execute(): void {
    console.log("Resizing the window");
  }
}
```

### CropCommand (Concrete Command)

This class implements the `ICommand` interface to crop an image.

```typescript
class CropCommand implements ICommand {
  execute(): void {
    console.log("Cropping the image");
  }
}
```

### BlackAndWhiteCommand (Concrete Command)

This class implements the `ICommand` interface to apply a black and white filter.

```typescript
class BlackAndWhiteCommand implements ICommand {
  execute(): void {
    console.log("Applying Black And White Filter");
  }
}
```

### CompositeCommand (Composite Command)

This class implements the `ICommand` interface to execute a sequence of commands.

```typescript
class CompositeCommand implements ICommand {
  constructor(private readonly commands: ICommand[] = []) {}

  public add(command: ICommand): void {
    this.commands.push(command);
  }

  public remove(): undefined | ICommand {
    return this.commands.pop();
  }

  public execute(): void {
    for (const command of this.commands) {
      command.execute();
    }
  }
}
```


## Usage Example

Below is an example of how to use the implemented classes to execute a series of commands.

```typescript
const composite = new CompositeCommand();

composite.add(new CropCommand());
composite.add(new ResizeCommand());
composite.add(new BlackAndWhiteCommand());

composite.execute(); // Output: Cropping the image
                     //          Resizing the window
                     //          Applying Black And White Filter
```

## Conclusion

The Composite Command Pattern is useful for composing multiple commands into a single command and treating them uniformly. This example demonstrates how the pattern can be applied to execute a sequence of commands in a specific order.

---
