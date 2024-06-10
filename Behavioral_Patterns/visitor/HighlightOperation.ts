import { AnchorNode } from "./AnchorNode";
import { HeadingNode } from "./HeadingNode";
import { Visitor } from "./visitor.interface";

export class Highlight implements Visitor {
  applyAnchorNode(anchor: AnchorNode): void {
    console.log("highlight-anchor");
  }

  applyHeadingNode(heading: HeadingNode): void {
    console.log("highlight-heading");
  }
}
