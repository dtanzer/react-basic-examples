import React from 'react';
import { connect } from 'react-redux';

import { TodoItem } from './TodoItem';

export class TodoList extends React.Component {
  render() {
    const items = this.props.todos.map(todo => <TodoItem item={todo} key={todo.text}/>);

    return <ul>{items}</ul>;
  }
}

export function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export const TodoListContainer = connect(mapStateToProps)(TodoList);