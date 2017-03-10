//@flow

export type Todo = {text: string, done: boolean};
export type State = { all: Todo[]};
export type NewAction = { type : "TODO_STATE_TOGGLED", text: string };
export type TodoAction = { type : "NEW_TODO_CREATED", todo: Todo };
export type Action = NewAction | TodoAction;