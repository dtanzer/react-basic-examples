//@flow
import TodosActions from './TodosActions';
import NewTodoActions from './NewTodoActions';

import type { TodosState, Action } from './TodoTypes';

const initialState: TodosState = {
  all: [
      { text: "Buy Milk", done: true },
      { text: "Buy Beer", done: true },
      { text: "Write workshop examples", done: false},
      { text: "Host workshop", done: false }
    ]
};
export function todosReducer(state: TodosState = initialState, action: Action) {
  switch(action.type) {
    case "TODO_STATE_TOGGLED":
      const todoText = action.text;
      const newTodos = state.all.map(todo => {
        const newTodo = Object.assign({}, todo);
        if(newTodo.text === todoText) {
          newTodo.done = !newTodo.done;
          return newTodo;
        }
        return newTodo;
      });
      return Object.assign({}, state, {
        all: newTodos
      });
    case "NEW_TODO_CREATED":
      return Object.assign({}, state, {
        all: [
          ...state.all,
          action.todo
        ]
      });
    default:
      return state;
  }
}