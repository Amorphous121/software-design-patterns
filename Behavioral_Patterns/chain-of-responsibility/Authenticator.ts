import { Handler } from "./Handler";
import { HttpRequest } from "./HttpRequest";

export class Authenticator extends Handler {
  constructor(next: Handler | null = null) {
    super(next);
  }

  public doHandle(request: HttpRequest): boolean {
    const isValid =
      request.getUserName() === "Admin" && request.getPassword() === "1234";
    console.log("Authentication");
    return !isValid;
  }
}
