import React from 'react';

export class AllTodos extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <li key={todo.key}>{todo.text}</li>
        ))}
      </ul>
    );
  }
}
