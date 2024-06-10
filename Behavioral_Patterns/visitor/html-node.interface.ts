import { Visitor } from "./visitor.interface";

export interface HtmlNode {
  execute(visitor: Visitor): void;
}