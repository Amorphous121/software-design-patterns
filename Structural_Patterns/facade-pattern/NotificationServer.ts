import { AuthToken } from "./AuthToken";
import { Connection } from "./Connection";
import { Message } from "./Message";

export class NotificationServer {
  public connect(ipAddress: string): Connection {
    return new Connection();
  }

  public authenticate(appId: string, key: string): AuthToken {
    return new AuthToken();
  }

  public send(authToken: AuthToken, message: Message, target: string): void {
    console.log("Sending a message");
  }
}
