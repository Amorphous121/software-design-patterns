import { BrowseHistory } from "./BrowseHistory";

const history = new BrowseHistory();

history.push("A");
history.push("B");
history.push("C");

const historyIterator = history.createIterator();

while(historyIterator.hasNext()) {
    const current = historyIterator.current();
    console.log(current);
    historyIterator.next();
}