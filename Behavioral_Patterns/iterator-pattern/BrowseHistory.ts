import { Iterator } from "./Iterator";

export class BrowseHistory {
  constructor(private urls: string[] = []) {}

  push(url: string): void {
    this.urls.push(url);
  }

  pop(): string | undefined {
    return this.urls.pop();
  }

  createIterator(): Iterator<string> {
    return new Iterator<string>(this.urls);
  }
}
