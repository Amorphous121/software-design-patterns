import { Device } from "./device.interface";

export class SonyTV implements Device {
  setChannel(channelNumber: number): void {
    console.log("Sony: setChannel");
  }

  turnOff(): void {
    console.log("Sony: turnOff");
  }

  turnOn(): void {
    console.log("Sony: turnOn");
  }
}
