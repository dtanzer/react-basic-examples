import React, { Component } from 'react';

import { Greeter } from './Greeter';

class App extends Component {
  render() {
    return (
      <Greeter toGreet="World"/>
    );
  }
}

export default App;
