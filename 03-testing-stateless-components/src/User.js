import React from 'react';

class User extends React.PureComponent {
  render() {
    const email = this.props.email ? <span className="email"> {this.props.email}</span> : null;
    const active = this.props.active || false;
    const activeInfo = <span className="active"> active: {active.toString()}</span>;

    return (
      <li>
        <FirstName name={ this.props.firstName}/>&nbsp;
        <span className="last-name">{this.props.lastName}</span>
        {email}
        {activeInfo}
      </li>
    );
  }
}

export class FirstName extends React.PureComponent {
  render() {
    return (
      <span className="first-name">{this.props.name}</span>
    );
  }
}

export default User;
