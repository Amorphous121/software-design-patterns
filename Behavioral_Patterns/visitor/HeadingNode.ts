import { HtmlNode } from "./html-node.interface";
import { Visitor } from "./visitor.interface";

export class HeadingNode implements HtmlNode {
    execute(visitor: Visitor): void {
        visitor.applyHeadingNode(this);
    }
}