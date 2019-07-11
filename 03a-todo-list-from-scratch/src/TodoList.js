import React, { Component } from 'react';
import { AllTodos } from './AllTodos';
import { NewTodo } from './NewTodo';

class TodoList extends Component {
  render() {
    return (
      <div>
        <h1>My Todos</h1>
        <AllTodos />
        <NewTodo />
      </div>
    );
  }
}

export default TodoList;
