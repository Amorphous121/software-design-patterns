import { BrowseHistory } from "./BrowseHistory";

const browseHistory = new BrowseHistory();

browseHistory.push("https://google.com");
browseHistory.push("https://facebook.com");
browseHistory.push("https://instagram.com");

const historyIterator = browseHistory.createIterator();

while (historyIterator.hasNext()) {
  const current = historyIterator.current();
  console.log(current);
  historyIterator.next();
}
