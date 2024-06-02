import { GenerateReportTask } from "./GenerateReportTask";
import { TransferMoneyTask } from "./TrasferMoneyTask";

const moneyTransferTask = new TransferMoneyTask();
const generateReport = new GenerateReportTask();

moneyTransferTask.execute();
generateReport.execute();
