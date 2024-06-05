---

# Push Style Observer Design Pattern Example

This project demonstrates the implementation of the Push Style Observer Design Pattern in TypeScript. The Push Style Observer Pattern allows an object (subject) to notify a list of observers about state changes, passing the updated state to the observers.

## Components of the Push Style Observer Pattern

1. **Observer Interface**: Defines the update method that observers must implement. In this example, `IObserver` is the Observer interface.
2. **Concrete Observers**: Implement the Observer interface to receive updates from the subject. In this example, `SpreadSheet` and `Chart` are the Concrete Observers.
3. **Subject**: Maintains a list of observers and notifies them of state changes. In this example, `Subject` and `DataSource` are the Subjects.

## Class Diagram

Below is a class diagram for the Push Style Observer Pattern implementation:

![Push Style Observer Pattern Class Diagram](/images/push-style-observer.png)

## Classes and Implementation

### IObserver (Observer Interface)

This interface defines the method required for updating an observer.

```typescript
interface IObserver {
    update(value: number): void;
}
```

### SpreadSheet (Concrete Observer)

This class implements the `IObserver` interface to receive updates from the subject and act on them.

```typescript
class SpreadSheet implements IObserver {
  update(value: number): void {
    console.log("Spreadsheet got notified: ", value);
  }
}
```

### Chart (Concrete Observer)

This class implements the `IObserver` interface to receive updates from the subject and act on them.

```typescript
class Chart implements IObserver {
  update(value: number): void {
    console.log("Chart got notified: ", value);
  }
}
```

### Subject (Subject)

This class maintains a list of observers and notifies them of state changes.

```typescript
export class Subject {
  constructor(private observers: IObserver[] = []) {}

  addObserver(observer: IObserver) {
    this.observers.push(observer);
  }

  removeObserver(observer: IObserver): void {
    this.observers = this.observers.filter(ob => ob !== observer);
  }

  notifyObserver(value: number) {
    for(const observer of this.observers) {
        observer.update(value);
    }
  }
}
```

### DataSource (Concrete Subject)

This class extends `Subject` to represent a data source that notifies observers of state changes.

```typescript
class DataSource extends Subject {
  private value: number = 0;

  constructor() {
    super();
  }

  getValue(): number {
    return this.value;
  }

  setValue(value: number): void {
    this.value = value;
    this.notifyObserver(value);
  }
}
```

## Usage Example

Below is an example of how to use the implemented classes to create observers, add them to a subject, and notify them of state changes.

```typescript
const dataSource = new DataSource();
const sheet1 = new SpreadSheet();
const sheet2 = new SpreadSheet();
const chart = new Chart();

dataSource.addObserver(sheet1);
dataSource.addObserver(sheet2);
dataSource.addObserver(chart);

dataSource.setValue(1); // Output: 
                        // Spreadsheet got notified: 1
                        // Spreadsheet got notified: 1
                        // Chart got notified: 1
```

## Conclusion

The Push Style Observer Pattern is useful for allowing an object to notify a list of observers about state changes, passing the updated state to the observers. This example demonstrates how the pattern can be applied to notify multiple observers of changes in a data source.

---