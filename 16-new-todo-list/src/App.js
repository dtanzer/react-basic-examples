import React, { Component } from 'react';
import './App.css';
import ToDoList from './ToDoList';
import { ToDoListContainer } from './ToDoList';
import { NewToDoItemContainer } from './NewToDoItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoListContainer />
        <NewToDoItemContainer/>
      </div>
    );
  }
}

export default App;
