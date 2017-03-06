import React from 'react';
import { connect } from 'react-redux';

import GreeterActions from './GreeterActions';

export class Greeter extends React.Component {
  render() {
    return (
      <div>
        <input type="text" value={this.props.toGreet} onChange={ this.props.toGreetChanged }/>
        <p>{this.props.greeting}</p>
      </div>
    );
  }
}

function mapStateToProperties(state) {
  return {
    toGreet: state.welcome.toGreet,
    greeting: state.welcome.greeting
  };
}
const actionCreators = {
  toGreetChanged: (event) => { return { type: GreeterActions.greetingChanged, toGreet: event.target.value}; }
}

export const GreeterContainer = connect(mapStateToProperties, actionCreators)(Greeter);
