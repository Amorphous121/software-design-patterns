import { DialogBox } from "./DialogBox";
import { UiControl } from "./UiControl";

export class Button extends UiControl {
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
