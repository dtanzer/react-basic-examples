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

const newTodoSubmitted = (text) => { 
  return (dispatch) => {
    const creatingNewTodoAction = {
      type: NewTodoActions.creatingNewTodo
    };
    
    dispatch(creatingNewTodoAction);
    createTodoOnServer(text, todo => {
      const todoSuccessfullyCreated = { 
        type: NewTodoActions.newTodoCreated, 
        todo
      };
      dispatch(todoSuccessfullyCreated);
    });
  }
}

export const actionCreators = {
  inputTextChanged: (event) => { return { type: NewTodoActions.newTodoTextChanged, text: event.target.value }},
  newTodoSubmitted
}

export const NewTodoContainer = connect(mapStateToProperties, actionCreators)(NewTodo);
