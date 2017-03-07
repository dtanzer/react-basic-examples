//@flow

export type TodoType = { text: string, done: boolean};
export type StateType = {
    all: TodoType[]
};
export type ActionType = TodoStateToggledActionType | NewTodoCreatedActionType | CreatingNewTodoActionType;
export type TodoStateToggledActionType = { type: 'TODO_STATE_TOGGLED', text: string };
export type NewTodoCreatedActionType = { type: 'NEW_TODO_CREATED', todo: TodoType };
export type CreatingNewTodoActionType = { type: 'CREATING_NEW_TODO' };
