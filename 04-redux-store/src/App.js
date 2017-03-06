import React, { Component } from 'react';
import { connect } from 'react-redux';

import User from './User';

export class App extends Component {
  render() {
    const renderedUsers = this.props.users.map(this.renderUser);
    return (
      <ul>
        {renderedUsers}
      </ul>
    );
  }

  renderUser(userData) {
    return <User firstName={userData.firstName} lastName={userData.lastName} email={userData.email} active={userData.active} />
  }
}

function mapStateToProperties(state) {
    return {
        users: state.users
    };
}
export const AppContainer = connect(mapStateToProperties)(App);
