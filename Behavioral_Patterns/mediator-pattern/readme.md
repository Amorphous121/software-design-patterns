---

# Mediator Design Pattern Example

This project demonstrates the implementation of the Mediator Design Pattern in TypeScript. The Mediator Pattern is used to reduce the complexity of communication between multiple objects by centralizing it in one object.

## Components of the Mediator Pattern

1. **Mediator**: Defines an interface for communicating with `Colleague` objects. In this example, `DialogBox` is the Mediator.
2. **Concrete Mediator**: Implements cooperative behavior by coordinating `Colleague` objects. In this example, `ArticlesDialogBox` is the Concrete Mediator.
3. **Colleague Classes**: Each `Colleague` class communicates with its mediator whenever it would have otherwise communicated with another colleague. In this example, `UiControl`, `TextBox`, `ListBox`, and `Button` are the Colleague classes.

## Class Diagram

Below is a class diagram for the Mediator Pattern implementation:

![Mediator Pattern Class Diagram](/images/mediator-pattern.png)


## Classes and Implementation

### DialogBox (Mediator)

This abstract class defines the interface for communicating with `Colleague` objects.

```typescript
abstract class DialogBox {
  public abstract changed(control: UiControl): void;
}
```

### UiControl (Colleague)

This class represents a UI control and holds a reference to the mediator.

```typescript
class UiControl {
  constructor(protected owner: DialogBox) {}
}
```

### TextBox (Concrete Colleague)

This class represents a text box UI control.

```typescript
class TextBox extends UiControl {
  private content: string = "";

  constructor(owner: DialogBox) {
    super(owner);
  }

  public getContent(): string {
    return this.content;
  }

  public setContent(content: string): void {
    this.content = content;
    this.owner.changed(this);
  }
}
```

### ListBox (Concrete Colleague)

This class represents a list box UI control.

```typescript
class ListBox extends UiControl {
  private selection: string = "";

  constructor(owner: DialogBox) {
    super(owner);
  }

  public getSelection(): string {
    return this.selection;
  }

  public setSelection(selection: string): void {
    this.selection = selection;
    this.owner.changed(this);
  }
}
```

### Button (Concrete Colleague)

This class represents a button UI control.

```typescript
class Button extends UiControl {
  private isEnabled: boolean = false;

  constructor(owner: DialogBox) {
    super(owner);
  }

  public getIsEnabled(): boolean {
    return this.isEnabled;
  }

  public setIsEnabled(enabled: boolean) {
    this.isEnabled = enabled;
    this.owner.changed(this);
  }
}
```

### ArticlesDialogBox (Concrete Mediator)

This class implements the cooperative behavior by coordinating `Colleague` objects.

```typescript
class ArticlesDialogBox extends DialogBox {
  private articlesListBox = new ListBox(this);
  private titleTextBox = new TextBox(this);
  private saveButton = new Button(this);

  public simulateUserInteraction() {
    this.articlesListBox.setSelection('Article 1');
    console.log("TextBox: ", this.titleTextBox.getContent()); // Article 1
    console.log('Button: ', this.saveButton.getIsEnabled()); // true

    this.titleTextBox.setContent('');
    console.log("TextBox: ", this.titleTextBox.getContent()); // ''
    console.log('Button: ', this.saveButton.getIsEnabled()); // false

    this.titleTextBox.setContent('Article 2');
    console.log("TextBox: ", this.titleTextBox.getContent()); // Article 2
    console.log('Button: ', this.saveButton.getIsEnabled()); // true
  }

  public changed(control: UiControl): void {
    if (control === this.articlesListBox) {
      this.articleSelected();
    } else if (control === this.titleTextBox) {
      this.titleChanged();
    }
  }

  private articleSelected(): void {
    this.titleTextBox.setContent(this.articlesListBox.getSelection());
    this.saveButton.setIsEnabled(true);
  }

  private titleChanged() {
    const content = this.titleTextBox.getContent();
    const isEmpty = content.length === 0;
    this.saveButton.setIsEnabled(!isEmpty);
  }
}
```

## Usage Example

Below is an example of how to use the implemented classes to simulate user interaction with the dialog box.

```typescript
const articlesDialog = new ArticlesDialogBox();
articlesDialog.simulateUserInteraction();
```

## Conclusion

The Mediator Pattern is useful for reducing the complexity of communication between multiple objects by centralizing it in one object. This example demonstrates how the pattern can be applied to coordinate interactions between UI controls in a dialog box.

---
