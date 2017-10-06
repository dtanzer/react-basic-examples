import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './User';

class App extends Component {
  render() {
    const renderedUsers = this.props.users.map(user => (
      <User firstName={user.firstName} lastName={user.lastName} email={user.email} active={user.active} />
    ));
    return (
      <ul>
        {renderedUsers}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

export const AppContainer = connect(mapStateToProps)(App);
export default App;
