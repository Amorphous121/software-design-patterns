---

# Facade Design Pattern Example

This project demonstrates the implementation of the Facade Design Pattern in TypeScript. The Facade Pattern provides a simplified interface to a complex subsystem.

## Components of the Facade Pattern

1. **Subsystem Classes**: These are the classes that perform the actual work. In this example, they are `NotificationServer`, `Connection`, `AuthToken`, and `Message`.
2. **Facade**: This is the simplified interface that clients use. Here, `NotificationService` acts as the Facade.

## Class Diagram

Below is a class diagram for the Facade Pattern implementation:

![Facade Pattern Class Diagram](/images/facade-pattern.png)

## Classes and Implementation

### Message

This class represents a message to be sent.

```typescript
class Message {
    constructor(private content: string) {}
}
```

### AuthToken

This class represents an authentication token.

```typescript
export class AuthToken {}
```

### Connection

This class represents a connection to the notification server.

```typescript
export class Connection {
    public disconnect(): void {}
}
```

### NotificationServer

This class represents the notification server, which handles connections, authentication, and message sending.

```typescript
class NotificationServer {
    public connect(ipAddress: string): Connection {
        return new Connection();
    }

    public authenticate(appId: string, key: string): AuthToken {
        return new AuthToken();
    }

    public send(authToken: AuthToken, message: Message, target: string): void {
        console.log('Sending a message');
    }
}
```

### NotificationService (Facade)

This class provides a simplified interface to the `NotificationServer` subsystem.

```typescript
class NotificationService {
    public send(message: string, target: string): void {
        const server = new NotificationServer();
        const connection = server.connect("ip");
        const authToken = server.authenticate("123", "abc");

        server.send(authToken, new Message(message), target);
        connection.disconnect();
    }
}
```

## Usage Example

Below is an example of how to use the `NotificationService` to send a message:

```typescript
const service = new NotificationService();
service.send("Hello, World!", "targetDevice");
```

This will output:

```
Sending a message
```


## Conclusion

The Facade Pattern is useful for providing a simplified interface to a complex subsystem. This example demonstrates how the pattern can be applied to a notification system to make it easier to send messages without dealing with the intricacies of connecting, authenticating, and sending data.

---
