import { IComponent } from "./component.interface";

export class Group implements IComponent {
  constructor(private components: IComponent[] = []) {}

  public add(component: IComponent): void {
    this.components.push(component);
  }

  public render(): void {
    for (const component of this.components) {
      component.render();
    }
  }

  public move() {
    for (const component of this.components) {
        component.move();
      }
  }
}
