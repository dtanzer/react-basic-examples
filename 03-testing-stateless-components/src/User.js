import React from 'react';

export const ActiveInfo = (active) => <span className="active"> active: {active.toString()}</span>;

export class User extends React.PureComponent {
  render() {
    const email = this.props.email ? <span className="email"> {this.props.email}</span> : null;
    const active = this.props.active || false;
    const activeInfo = <ActiveInfo active={active} />;

    return (
      <li>
        <span className="first-name">{this.props.firstName}</span>&nbsp;
        <span className="last-name">{this.props.lastName}</span>
        {email}
        {activeInfo}
      </li>
    );
  }
}
