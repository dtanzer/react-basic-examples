import React, { Component } from 'react';
import User from './User';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const renderedUsers= this.props.users.map(user => <User {...user} />);
    return (
      <ul>{renderedUsers}
      </ul>
    );
  }
}

function mapStateToProperties(state) {
  return{
    users : state.users
  };
}

export const AppContainer = connect(mapStateToProperties)(App);

export default App;
