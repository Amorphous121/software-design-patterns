import { DataSource } from "./DataSource";
import { IObserver } from "./observer.interface";

export class SpreadSheet implements IObserver {
  constructor(private readonly dataSource: DataSource) {}

  update(): void {
    console.log("Spreadsheet got notified: ", this.dataSource.getValue());
  }
}
