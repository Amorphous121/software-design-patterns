import { Device } from "./device.interface";

export class RemoteControl {
  constructor(protected device: Device) {}

  public turnOn(): void {
    this.device.turnOn();
  }

  public turnOff(): void {
    this.device.turnOff();
  }
}
