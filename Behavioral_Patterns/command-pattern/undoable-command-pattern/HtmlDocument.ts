export class HtmlDocument {
  private content: string = "";

  public makeBold() {
    this.content = "<b>" + this.content + "</b>";
  }

  public getContent(): string {
    return this.content;
  }

  public setContent(content: string): void {
    this.content = content;
  }
}
