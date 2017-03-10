//@flow
import TodosActions from './TodosActions';
import NewTodoActions from './NewTodoActions';

import type { State, Action } from './TodoTypes';


const initialState : State = {
  all: [
      { text: "Buy Milk", done: true },
      { text: "Buy Beer", done: true },
      { text: "Write workshop examples", done: false},
      { text: "Host workshop", done: false }
    ]
};
export function todosReducer(state : State = initialState, action : Action ) {
  switch(action.type) {
    case "TODO_STATE_TOGGLED":
      const newTodoText = action.text;
      const newTodos = state.all.map(todo => {
        const newTodo = Object.assign({}, todo);
        if(newTodo.text === newTodoText) {
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