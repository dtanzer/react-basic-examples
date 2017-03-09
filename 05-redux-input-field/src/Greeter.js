import React from 'react';
import { connect } from 'react-redux';

class Greeter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input type="text" value={this.props.toGreet} onChange={ e => this.props.changeName(e.target.value) }/>
        <p>{this.props.greeting}</p>
      </div>
    );
  }
}


export const CHANGE_NAME_TYPE = Symbol("CHANGE_NAME") 

const actionCreators = {
  changeName: (name) => {
    return {
      type: CHANGE_NAME_TYPE, 
      name: name
    }
  }

}

export const GreeterContainer = connect(state => state.welcome, actionCreators)(Greeter);




export default Greeter;
