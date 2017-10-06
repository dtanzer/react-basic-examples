import React from 'react';
import { shallow } from 'enzyme';

import { TodoList, mapStateToProps } from './TodoList';
import { TodoItem } from './TodoItem';

describe('<TodoList />', () => {
  it('renders a list of todo items', () => {
    const todos = [
      { text: "Buy Milk", done: true },
      { text: "Buy Beer", done: true }
    ];
    const list = shallow(<TodoList todos={todos} />);

    expect(list).toContainReact(<TodoItem item={todos[0]} />);
    expect(list).toContainReact(<TodoItem item={todos[1]} />);
  })
});

describe('mapStateToProps', () => {
  it('adds ToDos list from state to the props', () => {
    const state = {
      todos: ['a', 'b']
    };

    const props = mapStateToProps(state);

    expect(props.todos).toEqual(state.todos);
  })
});
