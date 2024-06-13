import { Library } from "./Library";
import { EbookProxy } from "./EbookProxy";
import { LoggingEbookProxy } from "./LoggingEbookProxy";

const fileNames = ["a", "b", "c", "d"];
const library = new Library();

for (const fileName of fileNames) {
  //   library.add(new EbookProxy(fileName));
  library.add(new LoggingEbookProxy(fileName));
}

library.openEbook("a");
library.openEbook("b");
