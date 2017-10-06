import React from 'react';

export class Greeter extends React.Component {
  render() {
    return (<p className="App-intro">
      Hello {this.props.toGreet}
    </p>);
  }
}