import React from 'react';
import { connect } from 'react-redux';

import TodoActions from './TodoActions';

export class AllTodos extends React.Component {
  render() {
    return (
      <ul>
        <li>FIXME render all todos</li>
      </ul>
    );
  }
}

function mapStateToProperties(state) {
  return {
    
  };
}
export const actionCreators = {
  
}

export const AllTodosContainer = connect(mapStateToProperties, actionCreators)(AllTodos);
