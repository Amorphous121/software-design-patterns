import { Subject } from "./Subject";

export class DataSource extends Subject {
  private value: number = 0;

  constructor() {
    super();
  }

  getValue(): number {
    return this.value;
  }

  setValue(value: number): void {
    this.value = value;
    this.notifyObserver();
  }
}
