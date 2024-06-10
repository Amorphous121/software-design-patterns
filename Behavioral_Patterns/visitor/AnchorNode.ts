import { HtmlNode } from "./html-node.interface";
import { Visitor } from "./visitor.interface";

export class AnchorNode implements HtmlNode {
    execute(visitor: Visitor): void {
        visitor.applyAnchorNode(this);
    }
}