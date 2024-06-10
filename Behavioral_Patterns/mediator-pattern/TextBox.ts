import { DialogBox } from "./DialogBox";
import { UiControl } from "./UiControl";

export class TextBox extends UiControl {
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
