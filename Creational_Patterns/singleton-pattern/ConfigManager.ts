export class ConfigManager {
  private settings: Map<string, any> = new Map();
  private static instance = new ConfigManager();

  private constructor() {}

  public set(key: string, value: any): void {
    this.settings.set(key, value);
  }

  public get(key: string): any {
    return this.settings.get(key);
  }

  public static getInstance(): ConfigManager {
    return this.instance;
  }
}
