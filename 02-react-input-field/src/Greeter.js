import React from 'react';

class Greeter extends React.Component {
  render() {
    return (
      <div>Hello {this.props.name}</div>
    );
  }
}

export default Greeter;
