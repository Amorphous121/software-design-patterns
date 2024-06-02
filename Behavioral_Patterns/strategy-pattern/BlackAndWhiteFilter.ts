import { Filter } from "./interface";

export class BlackAndWhiteFilter implements Filter {
  apply(fileName: string): void {
    console.log("Applying Black and White filter");
  }
}
