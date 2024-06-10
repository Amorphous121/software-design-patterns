import { DialogBox } from "./DialogBox";
import { UiControl } from "./UiControl";

export class ListBox extends UiControl {
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
