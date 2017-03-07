import React from 'react';
import ReactDOM from 'react-dom';
import { TodoListContainer } from './TodoList';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './Reducer';

const initialState = {
  todos: [
    { text: "Buy Milk", done: true },
    { text: "Buy Beer", done: true },
    { text: "Write workshop examples", done: false},
    { text: "Host workshop", done: false }
  ],
  newTodo: { text: "" },
  tabs: { activeTab: "all" }
};
const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}><TodoListContainer /></Provider>,
  document.getElementById('root')
);
