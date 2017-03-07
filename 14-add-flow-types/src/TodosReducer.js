//@flow
import TodosActions from './TodosActions';
import NewTodoActions from './NewTodoActions';

import type { ActionType, StateType } from './TodoTypes';

const initialState = {
  all: [
      { text: "Buy Milk", done: true },
      { text: "Buy Beer", done: true },
      { text: "Write workshop examples", done: false},
      { text: "Host workshop", done: false }
    ]
};
export function todosReducer(state: StateType = initialState, action: ActionType): StateType {
  switch(action.type) {
    case 'TODO_STATE_TOGGLED':
      const text = action.text;
      const newTodos = state.all.map(todo => {
        const newTodo = Object.assign({}, todo);
        if(newTodo.text === text) {
          newTodo.done = !newTodo.done;
          return newTodo;
        }
        return newTodo;
      });
      return Object.assign({}, state, {
        all: newTodos
      });
    case 'NEW_TODO_CREATED':
      const todo = action.todo;
      return Object.assign({}, state, {
        all: [
          ...state.all,
          todo
        ]
      });
    default:
      return state;
  }
}