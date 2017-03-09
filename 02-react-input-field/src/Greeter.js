import React from 'react';

class Greeter extends React.Component {
  constructor (props){
    super(props);
    this.state = {name: "World!"}
  }
  render() {
    let message = "";
    if(this.state.name){
      message = <div>Hello {this.state.name}</div>;
    }
    return (
      <div>
      <input type="text" value={this.state.name} onChange={this.changeValue.bind(this)}/>
      {message}
      </div>
    );
  }
  changeValue(event){
      this.setState({name: event.target.value});
    
  }
}

export default Greeter;
