import React from 'react';

class Greeter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      toGreet: "",
      greeting: ""
    };
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.toGreet} onChange={ e => this.setGreeting(e.target.value) }/>
        <p>{this.state.greeting}</p>
      </div>
    );
  }

  setGreeting(toGreet) {
    const greeting = toGreet ? "Hello " + toGreet : "";
    this.setState({
      toGreet,
      greeting
    });
  }
}

export default Greeter;
