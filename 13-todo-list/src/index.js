import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {reducer} from './TodosReducer';
import { loadAllTodos } from './Server';

const store = createStore(reducer);

loadAllTodos((todos) => {
  store.dispatch({
    type: 'TODOS_LOADED',
    todos
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
