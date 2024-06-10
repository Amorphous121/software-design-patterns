import { AnchorNode } from "./AnchorNode";
import { HeadingNode } from "./HeadingNode";
import { Visitor } from "./visitor.interface";

export class PlainTextOperation implements Visitor {
  applyAnchorNode(anchor: AnchorNode): void {
    console.log("text-anchor");
  }
  applyHeadingNode(heading: HeadingNode): void {
    console.log("text-heading");
  }
}
