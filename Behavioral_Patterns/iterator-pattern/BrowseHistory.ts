import { Iterator } from "./iterator.interface";

export class BrowseHistory {
  constructor(private urls: string[] = []) {}

  public push(url: string) {
    this.urls.push(url);
  }

  public pop(): string | undefined {
    return this.urls.pop();
  }

  public createIterator() {
    return new this.ListIterator(this);
  }

  public ListIterator = class implements Iterator<string> {
    private position = 0;
    constructor(private history: BrowseHistory) {}

    hasNext(): boolean {
      return this.position < this.history.urls.length;
    }

    current(): string {
      return this.history.urls[this.position];
    }

    next(): void {
      this.position += 1;
    }
  };
}
