import { Message } from "./Message";
import { NotificationServer } from "./NotificationServer";
export class NotificationService {
  public send(message: string, target: string): void {
    const server = new NotificationServer();
    const connection = server.connect("ip");
    const authToken = server.authenticate("123", "abc");

    server.send(authToken, new Message(message), target);
    connection.disconnect();
  }
}
