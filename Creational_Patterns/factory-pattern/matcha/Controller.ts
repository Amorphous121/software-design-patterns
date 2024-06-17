import { MatchaViewEngine } from "./MatchaViewEngine";
import { ViewEngine } from "./view-engine.interface";

export class Controller {
  public render(viewName: string, data: Map<string, any>): void {
    const engine = this.createViewEngine();
    const html = engine.render(viewName, data);
    console.log(html);
  }

  // protected abstract createViewEngine(): ViewEngine;

  protected createViewEngine(): ViewEngine {
    return new MatchaViewEngine();
  }
}
