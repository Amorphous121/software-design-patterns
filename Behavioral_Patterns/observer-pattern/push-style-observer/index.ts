import { Chart } from "./Chart";
import { DataSource } from "./DataSource";
import { SpreadSheet } from "./SpreadSheet";

const dataSource = new DataSource();
const sheet1 = new SpreadSheet();
const sheet2 = new SpreadSheet();
const chart = new Chart();

dataSource.addObserver(sheet1);
dataSource.addObserver(sheet2);
dataSource.addObserver(chart);

dataSource.setValue(1)