import { IObserver } from "./observer.interface";

export class SpreadSheet implements IObserver {
  update(value: number): void {
    console.log("Spreadsheet got notified: ", value);
  }
}
