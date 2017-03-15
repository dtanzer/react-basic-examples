import TodoActions from './TodoActions';

import { combineReducers } from 'redux';

const todosInitialState = [
  { text: "Buy Milk", done: true },
  { text: "Buy Beer", done: true },
  { text: "Write workshop examples", done: false},
  { text: "Host workshop", done: true }
];
function todosReducer(state=todosInitialState, action) {
  switch(action.type) {
    case TodoActions.todoStateToggled:
      const newTodos = state.map(todo => {
        const newTodo = Object.assign({}, todo);
        if(newTodo.text === action.text) {
          newTodo.done = !newTodo.done;
          return newTodo;
        }
        return newTodo;
      });
      return newTodos;
    case TodoActions.newTodoCreated:
      return [
          ...state,
          { text: action.text, done: false }
        ];
    default:
      return state;
  }
}

const newTodoInitialState = { text: "" };
function newTodoReducer(state=newTodoInitialState, action) {
  switch(action.type) {
    case TodoActions.newTodoCreated:
      return { text: "" };
    case TodoActions.newTodoTextChanged:
      return { text: action.text };
    default:
      return state;
  }
}

const tabsInitialState = { activeTab: "all" };
function tabsReducer(state=tabsInitialState, action) {
  console.log(state);
  switch(action.type) {
    case TodoActions.tabSwitched:
      return { activeTab: action.tab };
    default:
      return state;
  }
}

export const reducer = combineReducers({
  todos: todosReducer,
  newTodo: newTodoReducer,
  tabs: tabsReducer
});
