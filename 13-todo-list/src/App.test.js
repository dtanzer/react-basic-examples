import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './App';
import { TodoListContainer } from './TodoList';
import { NewTodoContainer } from './NewTodo';

describe('App', () => {
  it('shows a list with all ToDos', () => {
    const app = shallow(<App />);
    expect(app.find(TodoListContainer)).toHaveLength(1);
  });

  it('shows a form for new ToDos', () => {
    const app = shallow(<App />);
    expect(app).toContainReact(<NewTodoContainer />);
  });
});
