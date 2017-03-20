//@flow

export type TodoItem = { text: string, done: boolean };
export type TodosState = { all: TodoItem[]};

export type CreatingNewTodo = { type: "CREATING_NEW_TODO" };
export type TodoStateToggledAction = { type: "TODO_STATE_TOGGLED", text: string };
export type NewTodoCreatedAction = { type: "NEW_TODO_CREATED", todo: TodoItem }
export type Action = TodoStateToggledAction | NewTodoCreatedAction | CreatingNewTodo;

