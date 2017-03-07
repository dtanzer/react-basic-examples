import React from 'react';
import ReactDOM from 'react-dom';
import { TodoListContainer } from './TodoList';
import './index.css';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { tabsReducer } from './TabsReducer';
import { newTodoReducer } from './NewTodoReducer';
import { todosReducer } from './TodosReducer';

const reducer = combineReducers({
  todos: todosReducer,
  newTodo: newTodoReducer,
  tabs: tabsReducer
});
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}><TodoListContainer /></Provider>,
  document.getElementById('root')
);
