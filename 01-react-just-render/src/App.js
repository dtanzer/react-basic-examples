import React from 'react';
import logo from './logo.svg';
import './App.css'
import Greeter from './Greeter'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Greeter name="Ron Swanson"/>
      </div>
    );
  }
}

export default App;
