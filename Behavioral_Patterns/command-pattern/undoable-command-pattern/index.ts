import { BoldCommand } from "./BoldCommand";
import { History } from "./History";
import { HtmlDocument } from "./HtmlDocument";
import { UndoCommand } from "./UndoCommand";

const document = new HtmlDocument();
const history = new History();

document.setContent("Hello World");
console.log(document.getContent());

const boldCommand = new BoldCommand(document, history);
boldCommand.execute();

console.log(document.getContent());

const undoCommand = new UndoCommand(history);

undoCommand.execute();

console.log(document.getContent())