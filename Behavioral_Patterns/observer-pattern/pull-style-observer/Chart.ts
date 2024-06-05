import { DataSource } from './DataSource';
import { IObserver } from "./observer.interface";

export class Chart implements IObserver {

  constructor(private readonly dataSource: DataSource) {}

  update(): void {
    console.log("Chart got notified: ", this.dataSource.getValue());
  }
}
