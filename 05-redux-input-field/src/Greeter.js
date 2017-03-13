import React from 'react';
import { connect } from 'react-redux';

class Greeter extends React.Component {
  render() {
    return (
      <div>
        <input type="text" value={this.props.toGreet} onChange={ e => this.props.toGreetChangedAction(e.target.value) }/>
        <p>{this.props.greeting}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    toGreet: state.welcome.toGreet,
    greeting: state.welcome.greeting
  }
}

const actionCreators = {
  toGreetChangedAction: (newToGreet) => { return { type: 'TO_GREET_CHANGED', newToGreet: newToGreet }}
};

export const GreeterContainer = connect(mapStateToProps, actionCreators)(Greeter);
