export interface Widget {
  render(): void;
}

export interface ITextBox extends Widget {}

export interface IButton extends Widget {}

export interface WidgetFactory {
  createButton(): IButton;
  createTextBox(): ITextBox;
}
