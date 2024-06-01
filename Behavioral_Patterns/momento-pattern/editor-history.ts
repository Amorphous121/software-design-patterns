import { EditorState } from "./editor-state";

export class EditorHistory {
  constructor(private readonly history: EditorState[] = []) {}

  push(state: EditorState) {
    this.history.push(state);
  }

  pop() {
    return this.history.pop();
  }
}
