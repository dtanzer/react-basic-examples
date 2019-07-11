import React from 'react';
import './App.css';

export class CollapsibleList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
    };
  }
  render() {
    return (
      <li style={{fontSize: '200%'}}>
        <a href="#" onClick={e => this.setState({collapsed: !this.state.collapsed})}>
          {this.state.collapsed? '+' : '-'}
        </a> 
        {this.props.items[this.props.items.length-1]}
      {this._subList()}
      </li>
    );
  }
  _subList() {
    if(!this.state.collapsed) {
      return (
        <ul>
          { this.props.items.map(item => <li style={{color: 'green'}}>{item}</li>)}
        </ul>
      );
    }
  }
}