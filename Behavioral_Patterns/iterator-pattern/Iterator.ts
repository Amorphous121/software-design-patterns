import { IIterator } from "./iterator.interface";

export class Iterator<T> implements IIterator<T> {
  private position: number = 0;
  private length: number;

  constructor(private list: T[]) {
    this.length = list.length;
  }

  current(): T {
    return this.list[this.position];
  }

  hasNext(): boolean {
    return this.position < this.length;
  }

  next(): void {
    ++this.position;
  }
}
