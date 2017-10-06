import React from 'react';

class Greeter extends React.Component {
  constructor() {
    super();
    this.state = {
      toGreet: 'React'
    };
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.toGreet} onChange={e => this.updateGreeting(e.target.value)} />
        <p>{this.renderGreeting()}</p>

      </div>
    );
  }

  renderGreeting() {
    if(this.state.toGreet) {
      return "Hello "+this.state.toGreet;
    }
    return "";
  }

  updateGreeting(newToGreet) {
    this.setState({ toGreet: newToGreet});
  }
}

export default Greeter;
