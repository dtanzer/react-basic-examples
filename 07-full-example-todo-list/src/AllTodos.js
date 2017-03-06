import React from 'react';
import { connect } from 'react-redux';

import TodoActions from './TodoActions';

export class AllTodos extends React.Component {
  render() {
    return (
      <div>
        FIXME render all todos
      </div>
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
