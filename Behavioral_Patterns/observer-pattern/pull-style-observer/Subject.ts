import { IObserver } from "./observer.interface";

// Also known as observable
export class Subject {
  constructor(private observers: IObserver[] = []) {}

  addObserver(observer: IObserver) {
    this.observers.push(observer);
  }

  removeObserver(observer: IObserver): void {
    this.observers = this.observers.filter(ob => ob !== observer);
  }

  notifyObserver() {
    for(const observer of this.observers) {
        observer.update();
    }
  }
}
