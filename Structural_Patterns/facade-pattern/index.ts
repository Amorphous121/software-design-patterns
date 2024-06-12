import { NotificationService } from "./NotificationService";

const service = new NotificationService();
service.send("Hello, World!", "targetDevice");
