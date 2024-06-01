import { EditorState } from "./editor-state";

export class Editor {
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
