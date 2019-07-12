import React, { Component } from 'react';
import { AllTodos } from './AllTodos';
import { NewTodo } from './NewTodo';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  addTodo(todo) {
    this.setState({
      todos: [
        ...this.state.todos,
        { text: todo, key: Date.now() },
      ],
    });
  }

  render() {
    return (
      <div>
        <h1>My Todos</h1>
        <AllTodos todos={this.state.todos} />
        <NewTodo create={todo => this.addTodo(todo) }/>
      </div>
    );
  }
}

export default TodoList;
