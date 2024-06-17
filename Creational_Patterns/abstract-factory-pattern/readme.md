## Abstract Factory Pattern

### Overview

The Abstract Factory Pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes. It is used when a system needs to be independent of how its objects are created, composed, and represented, and it supports the design of a system that relies on multiple families of products.


## Class Diagram

Below is a class diagram for the Abstract Factory Pattern implementation:

![Abstract Factory Pattern Class Diagram](/images/abstract-factory-pattern.png)

### Components of the Pattern

1. **Abstract Product (Widget, ITextBox, IButton)**:
   - Declares interfaces for a set of distinct but related products.
   
2. **Concrete Product (MaterialButton, MaterialTextBox, AntButton, AntTextBox)**:
   - Defines products to be created by the corresponding concrete factory.

3. **Abstract Factory (WidgetFactory)**:
   - Declares an interface for operations that create abstract product objects.

4. **Concrete Factory (AntWidgetFactory, MaterialWidgetFactory)**:
   - Implements the operations to create concrete product objects.

5. **Client (ContactForm)**:
   - Uses only interfaces declared by the abstract factory and abstract product classes.


### Code Example

```typescript
interface Widget {
  render(): void;
}

interface ITextBox extends Widget {}

interface IButton extends Widget {}

interface WidgetFactory {
  createButton(): IButton;
  createTextBox(): ITextBox;
}

class MaterialButton implements IButton {
  render(): void {
    console.log("Material Button");
  }
}

class MaterialTextBox implements ITextBox {
  render(): void {
    console.log("Material TextBox");
  }
}

class AntButton implements IButton {
  render(): void {
    console.log("Ant Button");
  }
}

class AntTextBox implements ITextBox {
  render(): void {
    console.log("Ant TextBox");
  }
}

class AntWidgetFactory implements WidgetFactory {
  createButton(): IButton {
    return new AntButton();
  }

  createTextBox(): ITextBox {
    return new AntTextBox();
  }
}

class MaterialWidgetFactory implements WidgetFactory {
  createButton(): IButton {
    return new MaterialButton();
  }

  createTextBox(): ITextBox {
    return new MaterialTextBox();
  }
}

class ContactForm {
  public render(widgetFactory: WidgetFactory): void {
    widgetFactory.createTextBox().render();
    widgetFactory.createButton().render();
  }
}

// Usage example
const antFactory = new AntWidgetFactory();
const materialFactory = new MaterialWidgetFactory();

const contactForm = new ContactForm();
console.log("Using Ant Widgets:");
contactForm.render(antFactory);

console.log("Using Material Widgets:");
contactForm.render(materialFactory);
```

### Explanation

- **Abstract Products**: `ITextBox`, `IButton`
  - Define interfaces for types of widgets (TextBox and Button).

- **Concrete Products**: `MaterialButton`, `MaterialTextBox`, `AntButton`, `AntTextBox`
  - Provide implementations for the abstract products.

- **Abstract Factory**: `WidgetFactory`
  - Declares methods for creating abstract product objects.

- **Concrete Factories**: `AntWidgetFactory`, `MaterialWidgetFactory`
  - Implement the methods for creating concrete product objects.

- **Client**: `ContactForm`
  - Uses the abstract factory to create and render widgets without depending on their concrete classes.

In the example, the `ContactForm` can render either Ant or Material style widgets by simply passing in the appropriate factory. This decouples the form from the specific widget implementations.