import React from 'react';
import ReactDOM from 'react-dom';
import { TodoListContainer } from './TodoList';
import './index.css';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as oldReducer } from './Reducer';

import { reducer as navReducer } from './NavigationReducer';
import { reducer as todosReducer } from './TodosReducer';
import { reducer as newTodoReducer } from './NewTodoReducer';

const reducer = combineReducers({
  tabs: navReducer,
  todos: todosReducer,
  newTodo: newTodoReducer
});

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}><TodoListContainer /></Provider>,
  document.getElementById('root')
);
