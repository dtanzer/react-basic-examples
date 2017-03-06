import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import { reducer } from './Reducer';

const initialState = {
  welcome: {
    toGreet: "",
    greeting: ""
  }
};
const logger = createLogger();
const store = createStore(reducer, initialState, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
