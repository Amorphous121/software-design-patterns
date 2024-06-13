export interface Device {
  turnOn(): void;
  turnOff(): void;
  setChannel(channelNumber: number): void;
}
