import { WidgetFactory } from "../interface";

export class ContactForm {
  public render(widgetFactory: WidgetFactory): void {
    widgetFactory.createTextBox();
    widgetFactory.createButton();
  }
}
