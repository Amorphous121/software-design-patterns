# Design Patterns for Loosely Coupled Applications

Welcome to the world of Prathamesh Patil, a passionate software engineer specializing in the dynamic and versatile realm of Node.js. As you delve into this readme file, prepare to embark on a journey through the innovative mind of a dedicated creator.


# Table of Contents

1. [Purpose of This Repository](#purpose-of-this-repository)
2. - [Essentials Before We Start Our Learning](#essentials-before-we-start-our-learning)
    - [Object Oriented Design Paradigm](#object-oriented-design-paradigm)
    - [Principles Of Object Oriented Design](#principles-of-object-oriented-design)
    - [SOLID Principles](#solid-principles)
        - [Single Responsibility Principle (SRP)](#single-responsibility-principle-srp)
        - [Open/Closed Principle (OCP)](#openclosed-principle-ocp)
        - [Liskov Substitution Principle (LSP)](#liskov-substitution-principle-lsp)
        - [Interface Segregation Principle (ISP)](#interface-segregation-principle-isp)
        - [Dependency Inversion Principle (DIP)](#dependency-inversion-principle-dip)
    - [Principle of Programming for Interface, Not Implementations](#principle-of-programming-for-interface-not-implementations)
3. [Interface: A Misunderstood Concept](#interface-a-misunderstood-concept)



## Purpose of This Repository

This repository serves as a comprehensive guide for understanding design patterns and their application in creating loosely coupled applications with an object-oriented design paradigm. Whether you're a novice programmer or an experienced developer looking to enhance your skills, this resource aims to provide valuable insights and practical examples to deepen your understanding of design patterns.


# Essentials Before We Start Our Learning

## Object Oriented Design Paradigm
   

Object-Oriented Design (OOD) is a programming paradigm centered around the concept of "objects", which encapsulate data and behavior. Objects are instances of classes, which serve as blueprints defining their structure and behavior. This paradigm emphasizes modularity, reusability, and extensibility, making it well-suited for building complex software systems. In OOD, concepts such as inheritance, encapsulation, polymorphism, and abstraction play crucial roles in modeling real-world entities and their interactions.

```typescript
class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak(): void {
    console.log(`${this.name} barks.`);
  }
}

class Cat extends Animal {
  speak(): void {
    console.log(`${this.name} meows.`);
  }
}

const dog = new Dog('Buddy');
dog.speak(); // Output: Buddy barks.

const cat = new Cat('Whiskers');
cat.speak(); // Output: Whiskers meows.
```

In the above TypeScript example, we define a base class `Animal` with a property `name` and a method `speak()`, which logs a generic sound. Subclasses `Dog` and `Cat` extend the `Animal` class and override the `speak()` method with behavior specific to each animal type. This demonstrates the concept of inheritance and polymorphism, where objects of different classes share a common interface (`speak()` method) but exhibit different behaviors.



## Principles Of Object Oriented Design


Object-Oriented Design (OOD) adheres to several principles that guide the development of robust and maintainable software systems. These principles help ensure that code is modular, flexible, and scalable, promoting good design practices throughout the development process. Some of the key principles include:

- **Encapsulation**: Encapsulation involves bundling data and methods that operate on the data within a single unit, typically a class. This protects the data from external interference and ensures that changes to the implementation details do not affect other parts of the system.

- **Inheritance**: Inheritance enables the creation of new classes (derived classes) based on existing classes (base or parent classes). Derived classes inherit properties and behaviors from their parent classes, promoting code reuse and facilitating the extension of existing functionality.

- **Polymorphism**: Polymorphism allows objects of different classes to be treated as objects of a common superclass. This enables flexibility and extensibility in the design, as different objects can respond differently to the same method invocation based on their specific implementations.

- **Abstraction**: Abstraction involves modeling real-world entities as simplified representations in code. It focuses on essential characteristics while hiding unnecessary details, making the system easier to understand and maintain.

Here's a TypeScript example illustrating these principles:

```typescript
// Encapsulation: Bundle data and methods within a class
class Circle {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  // Abstraction: Hide implementation details
  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

// Inheritance: Create new classes based on existing ones
class Cylinder extends Circle {
  private height: number;

  constructor(radius: number, height: number) {
    super(radius);
    this.height = height;
  }

  // Polymorphism: Override method to provide specific behavior
  getVolume(): number {
    return this.getArea() * this.height;
  }
}

const cylinder = new Cylinder(3, 5);
console.log('Area:', cylinder.getArea()); // Output: Area: 28.274333882308138
console.log('Volume:', cylinder.getVolume()); // Output: Volume: 141.3716694115407
```

In this TypeScript example, we demonstrate encapsulation by encapsulating the `radius` property within the `Circle` class. Inheritance is illustrated by the `Cylinder` class inheriting from the `Circle` class, thus reusing its properties and methods. Polymorphism is showcased through the `getVolume()` method, which overrides the `getArea()` method of the superclass to provide specific behavior for calculating the volume of a cylinder. Finally, abstraction is applied by hiding the implementation details of the calculations within the respective methods, providing a simplified interface for users of the classes.



## SOLID Principles

SOLID is an acronym representing five key principles of object-oriented design that promote modular, flexible, and maintainable code. These principles serve as guidelines for writing clean, understandable, and scalable software systems. 

- **Single Responsibility Principle (SRP)**: A class should have only one reason to change. This principle states that a class should have only one responsibility or job, encapsulating a single aspect of functionality. This promotes high cohesion and low coupling, making classes easier to understand, maintain, and reuse.

- **Open/Closed Principle (OCP)**: Software entities should be open for extension but closed for modification. This principle encourages the design of code that can be easily extended with new functionality without modifying existing code. This is achieved by using abstraction and polymorphism to allow behavior to be extended without modifying existing code, thus ensuring code stability and minimizing the risk of introducing bugs.

- **Liskov Substitution Principle (LSP)**: Subtypes should be substitutable for their base types without altering the correctness of the program. This principle ensures that objects of a derived class can be used interchangeably with objects of the base class without affecting the desired behavior of the program. Violations of this principle can lead to unexpected behavior and incorrect program execution.

- **Interface Segregation Principle (ISP)**: Clients should not be forced to depend on interfaces they don't use. This principle advocates for the creation of specific interfaces for clients, rather than imposing large, monolithic interfaces that contain methods irrelevant to certain clients. By segregating interfaces into smaller, more focused units, this principle reduces coupling and promotes code clarity, flexibility, and maintainability.

- **Dependency Inversion Principle (DIP)**: High-level modules should not depend on low-level modules, but both should depend on abstractions. This principle encourages the use of abstractions (interfaces or abstract classes) to decouple high-level modules from their dependencies. By depending on abstractions rather than concrete implementations, DIP promotes flexibility, extensibility, and easier testing and maintenance.

Here's a TypeScript example illustrating the usage of SOLID principles:

```typescript
// Single Responsibility Principle (SRP)
class Logger {
  log(message: string): void {
    console.log(message);
  }
}

class UserService {
  private logger: Logger;

  constructor(logger: Logger) {
    this.logger = logger;
  }

  createUser(username: string): void {
    // Business logic for creating a user...
    this.logger.log(`User ${username} created.`);
  }
}

// Open/Closed Principle (OCP)
interface Shape {
  area(): number;
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  area(): number {
    return this.width * this.height;
  }
}

class Circle implements Shape {
  constructor(private radius: number) {}

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

// Liskov Substitution Principle (LSP)
function printArea(shape: Shape): void {
  console.log(`Area: ${shape.area()}`);
}

const rectangle = new Rectangle(5, 3);
const circle = new Circle(4);

printArea(rectangle); // Output: Area: 15
printArea(circle);    // Output: Area: 50.26548245743669

// Interface Segregation Principle (ISP)
interface Printable {
  print(): void;
}

interface Scannable {
  scan(): void;
}

class Printer implements Printable {
  print(): void {
    console.log('Printing...');
  }
}

class Scanner implements Scannable {
  scan(): void {
    console.log('Scanning...');
  }
}

// Dependency Inversion Principle (DIP)
class OrderService {
  private logger: Logger;

  constructor(logger: Logger) {
    this.logger = logger;
  }

  placeOrder(): void {
    // Business logic for placing an order...
    this.logger.log('Order placed.');
  }
}

const logger = new Logger();
const userService = new UserService(logger);
const orderService = new OrderService(logger);

userService.createUser('John Doe'); // Output: User John Doe created.
orderService.placeOrder();         // Output: Order placed.
```

In this TypeScript example, we demonstrate the SOLID principles:

- **SRP**: The `Logger` class has a single responsibility of logging messages, and the `UserService` class handles user creation logic separately.

- **OCP**: The `Shape` interface is open for extension by allowing new shapes to implement it, but it's closed for modification. New shapes can be added without changing existing code that uses the `Shape` interface.

- **LSP**: Both `Rectangle` and `Circle` classes are substitutable for the `Shape` interface, as they fulfill the contract of providing an `area()` method that calculates the area.

- **ISP**: The `Printable` and `Scannable` interfaces are segregated based on the actions they represent, allowing classes to implement only the interfaces they need.

- **DIP**: The `UserService` and `OrderService` classes depend on abstractions (`Logger` interface) rather than concrete implementations, allowing for easier testing and maintenance.


**Interface: A Misunderstood Concept**

Interfaces in object-oriented programming (OOP) are often misunderstood despite being a fundamental concept in many programming languages. An interface defines a contract for classes, specifying a set of methods that implementing classes must provide. However, unlike classes, interfaces do not contain any implementation details; they only declare the methods or properties that implementing classes must adhere to. 

Misconceptions surrounding interfaces often arise from their association with specific programming languages, such as Java or C#. However, interfaces are a concept present in many modern programming languages, including TypeScript, JavaScript, and others. Understanding interfaces is crucial for writing maintainable and extensible code, as they promote loose coupling and enable polymorphism.

Here's a TypeScript example illustrating the usage of interfaces:

```typescript
// Define an interface representing a Shape
interface Shape {
  calculateArea(): number;
}

// Implement the Shape interface with a Rectangle class
class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  // Implement the calculateArea method required by the Shape interface
  calculateArea(): number {
    return this.width * this.height;
  }
}

// Implement the Shape interface with a Circle class
class Circle implements Shape {
  constructor(private radius: number) {}

  // Implement the calculateArea method required by the Shape interface
  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

// Create instances of Rectangle and Circle
const rectangle = new Rectangle(5, 3);
const circle = new Circle(4);

// Calculate and log the area of each shape
console.log('Rectangle Area:', rectangle.calculateArea()); // Output: Rectangle Area: 15
console.log('Circle Area:', circle.calculateArea());       // Output: Circle Area: 50.26548245743669
```

In this TypeScript example, we define an interface `Shape`, which declares a method `calculateArea()`. The `Rectangle` and `Circle` classes implement this interface, providing their own implementations of the `calculateArea()` method. This demonstrates how interfaces define a contract that implementing classes must adhere to, enabling polymorphism and loose coupling in the codebase. Understanding interfaces as a contract rather than an implementation is essential for leveraging their full potential in software design.


## Principle of Programming for Interface, Not Implementations

The Principle of Programming for Interface, Not Implementations underscores the importance of coding to interfaces rather than concrete implementations. By relying on abstractions (interfaces), developers can create more flexible, extensible, and maintainable software systems. This principle encourages designing modules, functions, and classes to depend on abstract interfaces rather than specific implementations. This approach promotes loose coupling between components, allowing for easier substitution of implementations and facilitating testing, refactoring, and system evolution.

Here's a TypeScript example illustrating this principle:

```typescript
// Define an interface representing a Logger
interface Logger {
  log(message: string): void;
}

// Implement the Logger interface with a ConsoleLogger class
class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(`[INFO] ${message}`);
  }
}

// Implement the Logger interface with a FileLogger class
class FileLogger implements Logger {
  log(message: string): void {
    // Implementation to log message to a file
    console.log(`[FILE] ${message}`);
  }
}

// Client class depending on the Logger interface
class Client {
  private logger: Logger;

  constructor(logger: Logger) {
    this.logger = logger;
  }

  doSomething(): void {
    // Client code relies on the Logger interface, not specific implementations
    this.logger.log('Doing something...');
  }
}

// Create instances of ConsoleLogger and FileLogger
const consoleLogger = new ConsoleLogger();
const fileLogger = new FileLogger();

// Client code using ConsoleLogger
const client1 = new Client(consoleLogger);
client1.doSomething(); // Output: [INFO] Doing something...

// Client code using FileLogger
const client2 = new Client(fileLogger);
client2.doSomething(); // Output: [FILE] Doing something...
```

In this TypeScript example, we define an interface `Logger`, declaring a method `log(message: string): void`. Two classes, `ConsoleLogger` and `FileLogger`, implement this interface, each providing its own implementation of the `log()` method. The `Client` class depends on the `Logger` interface rather than specific implementations, allowing it to work with any object that adheres to the `Logger` interface. This adherence to the interface, rather than concrete implementations, demonstrates the Principle of Programming for Interface, Not Implementations, fostering code that is more modular, flexible, and easily testable.

