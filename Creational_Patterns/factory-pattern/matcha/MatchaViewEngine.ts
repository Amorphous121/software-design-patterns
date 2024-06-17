import { ViewEngine } from "./view-engine.interface";

export class MatchaViewEngine implements ViewEngine {
  public render(viewName: string, data: Map<string, any>): string {
    return "View rendered by Matcha";
  }
}
