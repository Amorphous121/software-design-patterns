import { Controller } from "../matcha/Controller";
import { ViewEngine } from "../matcha/view-engine.interface";
import { SharpViewEngine } from "./SharpViewEngine";

export class SharpController extends Controller {
  protected createViewEngine(): ViewEngine {
    return new SharpViewEngine();
  }
}
