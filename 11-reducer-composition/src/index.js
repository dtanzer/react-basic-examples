import React from 'react';
import ReactDOM from 'react-dom';
import { TodoListContainer } from './TodoList';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './Reducer';


const store = createStore(reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}><TodoListContainer /></Provider>,
  document.getElementById('root')
);
