import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './Reducer';
import createLogger from 'redux-logger';


const logger = createLogger();


const initialState = {
  welcome: {
    toGreet: "",
    greeting: ""
  }
};
const store = createStore(reducer, initialState, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
