import React from 'react';

export class Greeter extends React.PureComponent {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
}
