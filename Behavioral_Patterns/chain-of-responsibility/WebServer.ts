import { Handler } from "./Handler";
import { HttpRequest } from "./HttpRequest";

export class WebServer {
  constructor(private handler: Handler) {}

  public handle(request: HttpRequest): void {
    this.handler.handle(request);
  }
}
