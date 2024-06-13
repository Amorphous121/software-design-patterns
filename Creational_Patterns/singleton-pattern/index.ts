import { ConfigManager } from "./ConfigManager";

const configManager = ConfigManager.getInstance();
configManager.set('name', 'mosh');
console.log(configManager.get('name'));

const other = ConfigManager.getInstance();

console.log(other.get('name'))