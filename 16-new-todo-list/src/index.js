//@flow
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';

const initialState = {
  toDos: [
    {key: 1, text: "Make to do list", complete: false},
    {key: 2, text: "Complete First Item", complete: false}
  ],
  newText: ""
}

function reducer(state=initialState, action) {
  console.log(state, action)
  switch(action.type) {
    case "UPDATE_TEXT_LOUDLY": return Object.assign({}, state, {
      newText: action.newText
    })
    case "SUBMIT_TO_DO_LOUDLY": return Object.assign({}, state, {
      toDos: [
        ...state.toDos,
        {key: state.toDos.length + 1, text: action.toDo, complete: false }
      ],
      newText: ""
    })
    default: return state;
  }
}

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
    document.getElementById('root')
 );
 
