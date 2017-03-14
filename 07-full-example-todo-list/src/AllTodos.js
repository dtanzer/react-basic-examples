import React from 'react';
import { connect } from 'react-redux';

import TodoActions from './TodoActions';

export class AllTodos extends React.Component {
  render() {
    const renderedTodos = this.props.allTodos.map(todo => 
      <li>
        <input type="checkbox" checked={todo.done} onChange={e => this.props.todoChecked(todo.text)}/>
        {todo.text}
      </li>);
    return (
      <ul>
        {renderedTodos}
      </ul>
    );
  }
}

function mapStateToProperties(state) {
  return {
    allTodos: state.todos
  };
}
export const actionCreators = {
  todoChecked: (todoText) => {
    return {
      type: TodoActions.todoChecked,
      todoText: todoText
    }
  }
}

export const AllTodosContainer = connect(mapStateToProperties, actionCreators)(AllTodos);
