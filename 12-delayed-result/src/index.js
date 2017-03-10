import React from 'react';
import ReactDOM from 'react-dom';
import { TodoListContainer } from './TodoList';
import './index.css';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { tabsReducer } from './TabsReducer';
import { newTodoReducer } from './NewTodoReducer';
import { todosReducer } from './TodosReducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  todos: todosReducer,
  newTodo: newTodoReducer,
  tabs: tabsReducer
});
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}><TodoListContainer /></Provider>,
  document.getElementById('root')
);
