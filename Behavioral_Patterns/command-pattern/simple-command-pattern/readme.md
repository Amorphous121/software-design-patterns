---

# Command Design Pattern Example

This project demonstrates the implementation of the Command Design Pattern in TypeScript. The Command Pattern encapsulates a request as an object, thereby allowing for parameterization of clients with queues, requests, and operations. It enables the decoupling of sender and receiver of a request.

## Components of the Command Pattern

1. **Command Interface**: Defines the interface for executing an operation. In this example, `ICommand` is the Command interface.
2. **Concrete Command**: Implements the Command interface and binds a receiver with an action. In this example, `AddCustomerCommand` is the Concrete Command.
3. **Receiver**: Knows how to perform the operation associated with a request. In this example, `CustomerService` is the Receiver.
4. **Invoker**: Asks the command to carry out the request. In this example, `Button` is the Invoker.

## Class Diagram

Below is a class diagram for the Simple Command Pattern implementation:

![Simple Command Pattern Class Diagram](/images/simple-command-pattern.png)

## Classes and Implementation

### CustomerService (Receiver)

This class contains the business logic to add a customer.

```typescript
class CustomerService {
  public addCustomer() {
    console.log("Adding a customer");
  }
}
```

### ICommand (Command Interface)

This interface defines the method required for executing a command.

```typescript
interface ICommand {
  execute(): void;
}
```

### AddCustomerCommand (Concrete Command)

This class implements the ICommand interface and binds the CustomerService with the action of adding a customer.

```typescript
class AddCustomerCommand implements ICommand {
  constructor(private customerService: CustomerService) {}

  execute(): void {
    this.customerService.addCustomer();
  }
}
```

### Button (Invoker)

This class represents a button that triggers the execution of a command when clicked.

```typescript
class Button {
  private label: string = "";

  constructor(private command: ICommand) {}

  public setLabel(label: string): void {
    this.label = label;
  }

  public getlabel(): string {
    return this.label;
  }

  public click(): void {
    this.command.execute();
  }
}
```

## Usage Example

Below is an example of how to use the implemented classes to add a customer using a button click.

```typescript
const customerService = new CustomerService();
const addCustomerCommand = new AddCustomerCommand(customerService);

const addButton = new Button(addCustomerCommand);
addButton.setLabel("Add Customer");

addButton.click(); // Output: Adding a customer
```

## Conclusion

The Command Pattern is useful for decoupling the sender and receiver of a request and enabling the parameterization of clients with queues, requests, and operations. This example demonstrates how the pattern can be applied to encapsulate a request as an object and execute it through an invoker.

---
