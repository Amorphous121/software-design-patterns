import { HttpRequest } from "./HttpRequest";

export abstract class Handler {
  constructor(private next: Handler | null = null) {}

  public handle(request: HttpRequest) {
    if (this.doHandle(request)) {
      return;
    }

    if (this.next !== null) {
      this.next.handle(request);
    }
  }

  public abstract doHandle(request: HttpRequest): boolean;
}
