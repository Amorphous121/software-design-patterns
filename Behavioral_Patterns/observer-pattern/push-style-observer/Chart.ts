import { IObserver } from "./observer.interface";

export class Chart implements IObserver {
  update(value: number): void {
    console.log("Chart got notified: ", value);
  }
}
