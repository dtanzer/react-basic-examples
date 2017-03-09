import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer }  from './App';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  users: [
    { key: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', active: 'true'},
    { key: 2, firstName: 'Jane', lastName: 'Doe' },
    { key: 3, firstName: 'Mike', lastName: 'Nobody' },
    { key: 4, firstName: 'Mary', lastName: 'Sims' },
  ]
};

function reducer(state, _) {
  return state;
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
  <AppContainer />
  </Provider>,
  document.getElementById('root')
);
