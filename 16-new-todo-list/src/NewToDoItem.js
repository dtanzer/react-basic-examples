import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

const actionCreators = {
  updateText: event => { return {
    type: "UPDATE_TEXT_LOUDLY",
    newText: event.target.value
  }},
  submitToDo: text => { return {
    type: "SUBMIT_TO_DO_LOUDLY",
    toDo: text
  }}
}

class NewToDoItem extends Component {
  render() {
    return (
      <div>
        <input type="text" value={this.props.inputValue} onChange={this.props.updateText.bind(this)} onKeyUp={this.submitOnEnter.bind(this)}/>
      </div>
    );
  }

  submitOnEnter(event) {
    if(event.keyCode === 13) {
      this.props.submitToDo(this.props.inputValue);
    }
  }
}

function mapStateToProps(state) {
  return {
    inputValue: state.newText
  }
}



export const NewToDoItemContainer = connect(mapStateToProps, actionCreators)(NewToDoItem);