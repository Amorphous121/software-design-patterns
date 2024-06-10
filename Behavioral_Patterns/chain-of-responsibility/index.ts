import { Authenticator } from "./Authenticator";
import { Compressor } from "./Compressor";
import { Encryptor } from "./Encryptor";
import { HttpRequest } from "./HttpRequest";
import { Logger } from "./Logger";
import { WebServer } from "./WebServer";

const compressor = new Compressor(new Encryptor());
const logger = new Logger(compressor);
const authenticator = new Authenticator(logger);
const server = new WebServer(authenticator);

server.handle(new HttpRequest('Admin', '1234'));