export interface IIterator<T> {
  hasNext(): boolean;
  next(): void;
  current(): T;
}
