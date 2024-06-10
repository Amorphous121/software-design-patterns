import { UiControl } from "./UiControl";

export abstract class DialogBox {
  public abstract changed(control: UiControl): void;
}
