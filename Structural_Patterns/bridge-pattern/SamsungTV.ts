import { Device } from "./device.interface";

export class SamsungTV implements Device {
  turnOn(): void {
    console.log("Samsung: turnOn");
  }

  turnOff(): void {
    console.log("Samsung: turnOff");
  }

  setChannel(channelNumber: number): void {
    console.log("Samsung: setChannel");
  }
}
