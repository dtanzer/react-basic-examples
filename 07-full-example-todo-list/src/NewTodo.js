import React from 'react';
import { connect } from 'react-redux';

import TodoActions from './TodoActions';

export class NewTodo extends React.Component {
  render() {
    return (
      <div>
        <input type="text" value="FIXME" onChange={e => "FIXME"} />
        <input type="submit" onClick={e => "FIXME"} />
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

export const NewTodoContainer = connect(mapStateToProperties, actionCreators)(NewTodo);
