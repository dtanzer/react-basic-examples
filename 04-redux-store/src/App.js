import React, { Component } from 'react';
import User from './User';

class App extends Component {
  render() {
    return (
      <ul>
        <User firstName="John" lastName="Doe" email="john.doe@example.com" active={true} />
        <User firstName="Jane" lastName="Doe" />
      </ul>
    );
  }
}

export default App;
