import { SonyTV } from "./SonyTV";
import { SamsungTV } from "./SamsungTV";
import { RemoteControl } from "./RemoteControl";
import { AdvanceRemoteControl } from "./AdvanceRemoteControl";

const sonyTv = new SonyTV();
const remoteControl = new RemoteControl(sonyTv);

remoteControl.turnOn();
remoteControl.turnOff();

const samsungTv = new SamsungTV();
const advanceRemote = new AdvanceRemoteControl(samsungTv);

advanceRemote.turnOn();
advanceRemote.setChannel(5);
advanceRemote.turnOff();
