import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { AppContainer } from './App';
import './index.css';

const initialState = {
  users: [
    { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', active: 'true'},
    { firstName: 'Jane', lastName: 'Doe' },
    { firstName: 'Mike', lastName: 'Nobody' },
    { firstName: 'Mary', lastName: 'Sims' },
  ]
};

const reducer = (state, action) => state;
const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
