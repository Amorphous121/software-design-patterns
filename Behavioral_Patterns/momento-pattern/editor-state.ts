export class EditorState {
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
