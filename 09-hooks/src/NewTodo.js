import React from 'react';

export class NewTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.input} onChange={e => this.setState({input: e.target.value})} />
        <input type="submit" onClick={e => {
          this.props.create(this.state.input);
          this.setState({input: ""});
        }} />
      </div>
    );
  }
}
