import { Controller } from "./matcha/Controller";
import { SharpController } from "./sharp/SharpController";

export class ProductsController extends SharpController {
  public listProduct(): void {
    const context = new Map();
    this.render("products.html", context);
  }
}
