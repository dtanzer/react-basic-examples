import React from 'react';
import { connect } from 'react-redux';

import TodoActions from './TodoActions';

export class NewTodo extends React.Component {
  render() {
    return (
      <div>
        <input type="text" value={this.props.inputText} onChange={e => this.props.inputTextChanged(e.target.value)} />
        <input type="submit" value="New Todo" onClick={e => this.props.createNewTodo(this.props.inputText)} />
      </div>
    );
  }
}

function mapStateToProperties(state) {
  return {
    inputText: state.inputText
  };
}
export const actionCreators = {
  inputTextChanged: (text) => {
    return { type: TodoActions.inputTextChanged, newText: text };
  },
  createNewTodo: (text) => {
    return { type: TodoActions.newTodoCreated, todoText: text };
  }
}

export const NewTodoContainer = connect(mapStateToProperties, actionCreators)(NewTodo);
