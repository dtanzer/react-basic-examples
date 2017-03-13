import React from 'react';

class Greeter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toGreet: "World!"
    };
  }
  render() {
    const greeting = this.state.toGreet ? <p>Hello {this.state.toGreet}</p> : <p></p>;
    return (
      <div>
        <input type="text" value={this.state.toGreet} onChange={e => this.setState({toGreet: e.target.value})} />
        {greeting}
      </div>
    );
  }
}

export default Greeter;
