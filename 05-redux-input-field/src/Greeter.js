import React from 'react';
import { connect } from 'react-redux';

class Greeter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input type="text" value={this.props.toGreet} onChange={ e => this.setGreeting(e.target.value) }/>
        <p>{this.props.greeting}</p>
      </div>
    );
  }

  setGreeting(toGreet) {
    const greeting = toGreet ? "Hello " + toGreet : "";
    this.props.createGreetingChangedAction(greeting, toGreet);
  }
}

function mapStateToProps(state) {
  return {
    toGreet: state.welcome.toGreet,
    greeting: state.welcome.greeting
  };
}

const actionCreators = {
  createGreetingChangedAction: (greeting, toGreet) => {
    return {
      type: 'GREETING_CHANGED',
      greeting, 
      toGreet
    };
  }
};

export const GreeterContainer = connect(
  mapStateToProps, actionCreators
)(Greeter);

export default Greeter;
