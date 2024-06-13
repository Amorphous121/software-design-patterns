import { IComponent } from "./component.interface";

export class ContextMenu {
  public duplicate(component: IComponent): void {
    const newComponent = component.clone();
    console.log(`Duplicating component: ${newComponent.render()}`);
  }
}
