import { MaterialButton } from "./MaterialButton";
import { MaterialTextBox } from "./MaterialTextBox";
import { IButton, ITextBox, WidgetFactory } from "../interface";

export class MaterialWidgetFactory implements WidgetFactory {
  createButton(): IButton {
    return new MaterialButton();
  }

  createTextBox(): ITextBox {
    return new MaterialTextBox();
  }
}
