import { AnchorNode } from "./AnchorNode";
import { HeadingNode } from "./HeadingNode";

export interface Visitor {
    applyHeadingNode(heading: HeadingNode): void;
    applyAnchorNode(anchor: AnchorNode): void;
}