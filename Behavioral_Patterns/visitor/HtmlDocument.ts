import { HtmlNode } from "./html-node.interface";
import { Visitor } from "./visitor.interface";

export class HtmlDocument {
  constructor(private nodes: HtmlNode[] = []) {}

  public add(node: HtmlNode): void {
    this.nodes.push(node);
  }

  public execute(visitor: Visitor): void {
    for(const node of this.nodes) {
      node.execute(visitor)
    }
  }
}
