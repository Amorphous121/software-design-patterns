---

# Template Method Design Pattern Example

This project demonstrates the implementation of the Template Method Design Pattern in TypeScript. The Template Method Pattern defines the skeleton of an algorithm in a method, deferring some steps to subclasses. It allows subclasses to redefine certain steps of an algorithm without changing the algorithm's structure.

## Components of the Template Method Pattern

1. **Abstract Class**: Defines the template method and the abstract methods that subclasses will override. In this example, `Task` is the abstract class.
2. **Concrete Classes**: Implement the abstract methods defined in the abstract class. Here, `TransferMoneyTask` and `GenerateReportTask` are the concrete classes.
3. **Hook**: An optional method that can be overridden by subclasses. In this example, there is no explicit hook method, but the `doExecute` method acts as a customizable step in the algorithm.

## Class Diagram

Below is a class diagram for the Template Method Pattern implementation:

![Template Method Pattern Class Diagram](/images/template-method-design.png)

## Classes and Implementation

### AuditTrail

This class represents an auditing mechanism that logs actions. It is used by the `Task` class.

```typescript
class AuditTrail {
  record() {
    console.log('Audit');
  }
}
```

### Task (Abstract Class)

This abstract class defines the template method `execute` and an abstract method `doExecute` that must be implemented by subclasses.

```typescript
abstract class Task {
  private auditTrail: AuditTrail;

  constructor() {
    this.auditTrail = new AuditTrail();
  }

  public execute() {
    this.auditTrail.record();
    this.doExecute();
  }

  protected abstract doExecute(): void;
}
```

### TransferMoneyTask (Concrete Class)

This class implements the `doExecute` method to perform the specific action of transferring money.

```typescript
class TransferMoneyTask extends Task {
  constructor() {
    super();
  }

  protected doExecute() {
    console.log("Transfer Money");
  }
}
```

### GenerateReportTask (Concrete Class)

This class implements the `doExecute` method to perform the specific action of generating a report.

```typescript
class GenerateReportTask extends Task {
  constructor() {
    super();
  }

  protected doExecute() {
    console.log("Generate Report");
  }
}
```

## Usage Example

Below is an example of how to use the implemented classes to perform different tasks with an auditing step.

```typescript
const transferMoneyTask = new TransferMoneyTask();
transferMoneyTask.execute(); // Output: Audit \n Transfer Money

const generateReportTask = new GenerateReportTask();
generateReportTask.execute(); // Output: Audit \n Generate Report
```

## Conclusion

The Template Method Pattern is useful for defining the skeleton of an algorithm and allowing subclasses to redefine certain steps without changing the algorithm's structure. This example demonstrates how the pattern can be applied to perform tasks with a consistent auditing step.

---