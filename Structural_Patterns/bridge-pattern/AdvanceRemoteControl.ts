import { RemoteControl } from "./RemoteControl";
import { Device } from "./device.interface";

export class AdvanceRemoteControl extends RemoteControl {
  constructor(device: Device) {
    super(device);
  }

  public setChannel(channelNumber: number): void {
    this.device.setChannel(channelNumber);
  }
}
