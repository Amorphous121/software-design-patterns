export class HttpRequest {
  constructor(private userName: string, private password: string) {}

  public getUserName(): string {
    return this.userName;
  }

  public getPassword(): string {
    return this.password;
  }
}
