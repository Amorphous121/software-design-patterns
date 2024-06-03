---

# Memento Design Pattern Example

This project demonstrates the implementation of the Memento Design Pattern in TypeScript. The Memento Pattern is used to capture and externalize an object's internal state so that the object can be restored to this state later without violating encapsulation.

## Class Diagram

Below is a class diagram for the Momento Pattern implementation:

![Momento Pattern Class Diagram](/images/momento-pattern.png)

## Components of the Memento Pattern

1. **Memento**: Stores the internal state of the Originator object. In this example, the `EditorState` class acts as the Memento.
2. **Originator**: Creates a Memento containing a snapshot of its current internal state. It also uses the Memento to restore its internal state. Here, the `Editor` class is the Originator.
3. **Caretaker**: Responsible for the Memento's safekeeping. It never operates on or examines the contents of a Memento. The `EditorHistory` class serves as the Caretaker in this example.

## Classes and Implementation

### EditorState (Memento)

This class represents the state of the `Editor`. It captures the state in terms of content, font, and font size.

```typescript
class EditorState {
  constructor(
    private readonly _content: string,
    private readonly _font: string,
    private readonly _fontSize: number
  ) {}

  public getContent() {
    return this._content;
  }

  public getFont() {
    return this._font;
  }

  public getFontSize() {
    return this._fontSize;
  }
}
```

### Editor (Originator)

This class represents a text editor that can save its state to a `EditorState` and restore its state from an `EditorState`.

```typescript
class Editor {
  constructor(
    private _content: string = "",
    private _font: string = "Comic sans",
    private _fontSize: number = 11
  ) {}

  public createState() {
    return new EditorState(
      this.getContent(),
      this.getFont(),
      this.getFontSize()
    );
  }

  public restoreState(state: EditorState) {
    this._content = state.getContent();
    this._font = state.getFont();
    this._fontSize = state.getFontSize();
  }

  public getContent() {
    return this._content;
  }

  public setContent(content: string) {
    this._content = content;
  }

  public getFont() {
    return this._font;
  }

  public setFont(font: string) {
    this._font = font;
  }

  public getFontSize() {
    return this._fontSize;
  }

  public setFontSize(fontSize: number) {
    this._fontSize = fontSize;
  }
}
```

### EditorHistory (Caretaker)

This class maintains the history of `EditorState` objects, allowing the `Editor` to undo changes by restoring previous states.

```typescript
class EditorHistory {
  constructor(private readonly history: EditorState[] = []) {}

  push(state: EditorState) {
    this.history.push(state);
  }

  pop() {
    return this.history.pop();
  }
}
```

## Usage Example

Below is an example of how to use the implemented classes to create an editor, save its states, and undo changes.

```typescript
const editor = new Editor();
const history = new EditorHistory();

editor.setContent("First version");
history.push(editor.createState());

editor.setContent("Second version");
history.push(editor.createState());

editor.setContent("Third version");

// Undo to second version
editor.restoreState(history.pop());

console.log(editor.getContent()); // Output: Second version

// Undo to first version
editor.restoreState(history.pop());

console.log(editor.getContent()); // Output: First version
```

## Conclusion

The Memento Pattern is useful for saving and restoring the state of an object without exposing its implementation details. This example demonstrates how the pattern can be applied to a text editor for managing and undoing changes.

---