import { ViewEngine } from "../matcha/view-engine.interface";

export class SharpViewEngine implements ViewEngine {
  render(viewName: string, data: Map<string, any>): string {
    return "View rendered by Sharp";
  }
}
