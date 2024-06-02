import { Task } from "./Task";

export class TransferMoneyTask extends Task {
  constructor() {
    super();
  }

   protected doExecute() {
    console.log("Transfer Money");
  }
}
