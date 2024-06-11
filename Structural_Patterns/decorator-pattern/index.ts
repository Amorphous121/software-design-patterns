import { CloudStream } from "./CloudStream";
import { CompressedCloudStream } from "./CompressedCloudStream";
import { EncryptedCloudStream } from "./EncryptedCloudStream";
import { IStream } from "./stream.interface";

function storeCreditCard(stream: IStream) {
  stream.write("1234-1234-1234-1234");
}

storeCreditCard(
  new CompressedCloudStream(new EncryptedCloudStream(new CloudStream()))
);
