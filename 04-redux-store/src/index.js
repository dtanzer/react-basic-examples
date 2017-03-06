import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const initialState = {
  users: [
    { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', active: 'true'},
    { firstName: 'Jane', lastName: 'Doe' },
    { firstName: 'Mike', lastName: 'Nobody' },
    { firstName: 'Mary', lastName: 'Sims' },
  ]
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
