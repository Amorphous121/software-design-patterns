export interface ViewEngine {
  render(viewName: string, data: Map<string, any>): string;
}
