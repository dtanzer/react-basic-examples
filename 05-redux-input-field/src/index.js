import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './Reducer';

const initialState = {
  welcome: {
    toGreet: "",
    greeting: ""
  }
};
const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
