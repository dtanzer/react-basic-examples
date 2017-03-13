import React from 'react';

export const FirstName = (props) => <span className="first-name">{this.props.firstName}</span>;

class User extends React.PureComponent {
  render() {
    const email = this.props.email ? <span className="email"> {this.props.email}</span> : null;
    const active = this.props.active || false;
    const activeInfo = <span class="active"> active: {active.toString()}</span>;

    return (
      <li>
        <FirstName firstName={this.props.firstName} />&nbsp;
        <span className="last-name">{this.props.lastName}</span>
        {email}
        {activeInfo}
      </li>
    );
  }
}

export default User;
