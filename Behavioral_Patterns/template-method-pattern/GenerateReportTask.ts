import { Task } from "./Task";

export class GenerateReportTask extends Task {
  constructor() {
    super();
  }

  protected doExecute() {
    console.log("Generate Report");
  }
}
