import { Handler } from "./Handler";
import { HttpRequest } from "./HttpRequest";

export class Encryptor extends Handler {
  constructor(next: Handler | null = null) {
    super(next);
  }

  public doHandle(request: HttpRequest): boolean {
    console.log("Encrypted");
    return false;
  }
}
