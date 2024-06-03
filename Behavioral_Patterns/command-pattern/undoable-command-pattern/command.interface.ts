export interface ICommand {
  execute(): void;
}

export interface IUndoableCommand extends ICommand {
    unexecute(): void
}
