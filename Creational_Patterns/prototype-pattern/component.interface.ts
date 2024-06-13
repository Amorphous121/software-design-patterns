export interface IComponent {
  render(): void;
  clone(): IComponent;
}
