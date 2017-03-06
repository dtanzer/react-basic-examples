import React from 'react';
import { connect } from 'react-redux';

import TodoActions from './TodoActions';

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

function mapStateToProperties(state) {
  return {
    newText: state.newTodo.text
  };
}
export const actionCreators = {
  inputTextChanged: (event) => { return { type: TodoActions.newTodoTextChanged, text: event.target.value }},
  newTodoSubmitted: (text) => { return { type: TodoActions.newTodoCreated, text: text }}
}

export const NewTodoContainer = connect(mapStateToProperties, actionCreators)(NewTodo);
