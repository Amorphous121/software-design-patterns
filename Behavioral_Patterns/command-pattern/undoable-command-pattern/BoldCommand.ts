import { History } from "./History";
import { HtmlDocument } from "./HtmlDocument";
import { IUndoableCommand } from "./command.interface";

export class BoldCommand implements IUndoableCommand {
  private prevContent: string = "";

  constructor(private document: HtmlDocument, private history: History) {}

  execute(): void {
    this.prevContent = this.document.getContent();
    this.document.makeBold();
    this.history.push(this);
  }

  unexecute(): void {
    this.document.setContent(this.prevContent);
  }
}
