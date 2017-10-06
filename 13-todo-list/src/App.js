import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { TodoListContainer } from './TodoList';
import { NewTodoContainer } from './NewTodo';

class App extends Component {
  render() {
    return (
      <div>
        <NewTodoContainer />
        <TodoListContainer />
      </div>
    );
  }
}

export default App;
