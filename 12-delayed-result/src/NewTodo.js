import React from 'react';
import { connect } from 'react-redux';

import NewTodoActions from './NewTodoActions';

export class NewTodo extends React.Component {
  render() {
    return (
      <div>
        <input type="text" value={this.props.newText} onChange={this.props.inputTextChanged} />
        <input type="submit" onClick={e => this.props.newTodoSubmitted(this.props.newText)} />
      </div>
    );
  }
}

function createTodo(text) {
  return { text: text, done: false };
}

function createTodoOnServer(text, callback) {
  //This function simulates the delay caused by creating a TODO on
  //a server. It just uses setTimeout instead of a real server communication.
  setTimeout(() => callback(createTodo(text)), 2000);
}

function mapStateToProperties(state) {
  return {
    newText: state.newTodo.text
  };
}
export const actionCreators = {
  inputTextChanged: (event) => { return { type: NewTodoActions.newTodoTextChanged, text: event.target.value }},
  newTodoSubmitted: (text) => { return { type: NewTodoActions.newTodoCreated, todo: createTodo(text) }}
}

export const NewTodoContainer = connect(mapStateToProperties, actionCreators)(NewTodo);
