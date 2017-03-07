import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoActions from './TodoActions';
import { AllTodosContainer } from './AllTodos';
import { NewTodoContainer } from './NewTodo';

export class TodoList extends Component {
  render() {
    const todosTab = (
      <div>
        <h1>My Todos</h1>
        <AllTodosContainer />
      </div>
    );
    const newTodoTab = (
      <div>
        <h1>New Todo</h1>
        <NewTodoContainer />
      </div>
    );
    const activeTab = this.props.activeTab==="all"? todosTab : newTodoTab;
    return (
      <div>
        <div id="tabs">
          <a href="#" onClick={_ => this.props.switchTab("all")}>All Todos</a> | 
          <a href="#" onClick={_ => this.props.switchTab("new")}>New Todo</a>
        </div>
        {activeTab}
      </div>
    );
  }
}

function mapStateToProperties(state) {
  return {
    activeTab: state.tabs.activeTab
  };
}
export const actionCreators = {
  switchTab: (tab) => { return { type: TodoActions.tabSwitched, tab: tab }}
}

export const TodoListContainer = connect(mapStateToProperties, actionCreators)(TodoList);
