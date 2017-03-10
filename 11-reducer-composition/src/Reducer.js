import TodoActions from './TodoActions';
import { combineReducers } from 'redux';

const toDoinitialState = [
    { text: "Buy Milk", done: true },
    { text: "Buy Beer", done: true },
    { text: "Write workshop examples", done: false},
    { text: "Host workshop", done: false }
  ];

export function toDosReducer(state=toDoinitialState, action) {
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

export const newToDoInitialState = {
  text: "" 
}

export function newToDoReducer (state=newToDoInitialState, action) {
  switch(action.type) {
    case TodoActions.newTodoCreated:
      return Object.assign({}, state, {
        text: ""
      });
    case TodoActions.newTodoTextChanged:
      return Object.assign({}, state, {
        text: action.text
      });
    default:
      return state;
  }
}

export const tabInitialState = {
  activeTab: "all"
};

export function tabsReducer(state=tabInitialState, action) {
  switch(action.type) {
    case TodoActions.tabSwitched:
      return Object.assign({}, state, {
        activeTab: action.tab
      });
    default:
      return state;
  }
}

export const reducer = combineReducers({todos: toDosReducer, tabs: tabsReducer, newTodo: newToDoReducer})