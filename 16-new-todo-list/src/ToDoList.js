import React from 'react';
import { PureComponent } from 'react';
import { connect } from 'react-redux';

const ListItem = (props) => <li>{props.text}</li> 

class ToDoList extends PureComponent {
  render() {
    const Items = this.props.toDos.map(todo => <ListItem {...todo} />);
    return (
      <div>
        <h1>Our List</h1>
        <ol>
          {Items}
        </ol>
      </div>
    );
  }
}
 
function mapStateToProps(state) {
  return {
    toDos: state.toDos
  }
}

export const ToDoListContainer = connect(mapStateToProps)(ToDoList);

export default ToDoList;