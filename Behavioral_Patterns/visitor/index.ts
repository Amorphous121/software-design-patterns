import { AnchorNode } from "./AnchorNode";
import { HeadingNode } from "./HeadingNode";
import { Highlight } from "./HighlightOperation";
import { HtmlDocument } from "./HtmlDocument";
import { PlainTextOperation } from "./PlainText";

const document = new HtmlDocument();
document.add(new HeadingNode());
document.add(new AnchorNode());
document.execute(new Highlight());
document.execute(new PlainTextOperation)