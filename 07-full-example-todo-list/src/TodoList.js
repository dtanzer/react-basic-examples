import React, { Component } from 'react';
import { AllTodosContainer } from './AllTodos';
import { NewTodoContainer } from './NewTodo';

class TodoList extends Component {
  render() {
    return (
      <div>
        <h1>My Todos</h1>
        <AllTodosContainer />
        <NewTodoContainer />
      </div>
    );
  }
}

export default TodoList;
