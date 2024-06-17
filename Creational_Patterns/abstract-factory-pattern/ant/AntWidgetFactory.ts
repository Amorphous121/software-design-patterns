import { AntButton } from "./AntButton";
import { AntTextBox } from "./AntTextBox";
import { IButton, ITextBox, WidgetFactory } from "../interface";

export class AntWidgetFactory implements WidgetFactory {
  createButton(): IButton {
    return new AntButton();
  }

  createTextBox(): ITextBox {
    return new AntTextBox();
  }
}
