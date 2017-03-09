import React, { PureComponent } from 'react';

class Greeter extends PureComponent {
  render() {
    return (
      <span> Hello {this.props.name}
      </span>
    );
  }
}

export default Greeter;