# Chain of Responsibility Design Pattern Example

This project demonstrates the implementation of the Chain of Responsibility Design Pattern in TypeScript. The Chain of Responsibility Pattern is used to pass a request along a chain of handlers, where each handler decides either to process the request or pass it to the next handler in the chain.

## Components of the Chain of Responsibility Pattern

1. **Handler**: Defines an interface for handling requests and optionally implements the successor link.
2. **Concrete Handler**: Handles requests it is responsible for, and can access its successor. If the Concrete Handler can handle the request, it does so; otherwise, it forwards the request to its successor.
3. **Client**: Initiates and sends requests to the chain of handlers.

## Class Diagram

Below is a class diagram for the Chain Of Responsibility Pattern implementation:

![Chain Of Responsibility Pattern Class Diagram](/images/chain-of-responsibility.png)

## Classes and Implementation

### Handler (Abstract Handler)

This abstract class defines the structure for handling a request and passing it to the next handler in the chain if necessary.

```typescript
abstract class Handler {
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
```

### HttpRequest

This class represents the request that will be passed along the chain of handlers. It contains user credentials for this example.

```typescript
class HttpRequest {
  constructor(private userName: string, private password: string) {}

  public getUserName(): string {
    return this.userName;
  }

  public getPassword(): string {
    return this.password;
  }
}
```

### Authenticator (Concrete Handler)

This class is responsible for handling authentication. If the authentication is successful, it passes the request to the next handler in the chain.

```typescript
class Authenticator extends Handler {
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
```

### Compressor (Concrete Handler)

This class handles compression of the request data.

```typescript
class Compressor extends Handler {
  constructor(next: Handler | null = null) {
    super(next);
  }

  public doHandle(request: HttpRequest): boolean {
    console.log("Compress");
    return false;
  }
}
```

### Encryptor (Concrete Handler)

This class handles encryption of the request data.

```typescript
class Encryptor extends Handler {
  constructor(next: Handler | null = null) {
    super(next);
  }

  public doHandle(request: HttpRequest): boolean {
    console.log("Encrypted");
    return false;
  }
}
```

### Logger (Concrete Handler)

This class handles logging of the request.

```typescript
class Logger extends Handler {
  constructor(next: Handler | null = null) {
    super(next);
  }

  public doHandle(request: HttpRequest): boolean {
    console.log("Log");
    return false;
  }
}
```

### WebServer (Client)

This class sends requests to the chain of handlers.

```typescript
class WebServer {
  constructor(private handler: Handler) {}

  public handle(request: HttpRequest): void {
    this.handler.handle(request);
  }
}
```

## Usage Example

Below is an example of how to use the implemented classes to create a chain of handlers and process an HTTP request.

```typescript
const logger = new Logger(null);
const encryptor = new Encryptor(logger);
const compressor = new Compressor(encryptor);
const authenticator = new Authenticator(compressor);

const server = new WebServer(authenticator);

const request = new HttpRequest("Admin", "1234");
server.handle(request);
```

## Conclusion

The Chain of Responsibility Pattern is useful for handling requests through a series of handlers, each of which can either process the request or pass it to the next handler in the chain. This example demonstrates how the pattern can be applied to an HTTP request processing pipeline.