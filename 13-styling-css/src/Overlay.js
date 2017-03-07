import React from 'react';
import { connect } from 'react-redux';

import './Overlay.css';

export class Overlay extends React.Component {
  render() {
    const display = this.props.overlay? "block" : "none";
    const style = {
        display: display
    };
    return (
      <div className="overlay" style={style}>
      </div>
    );
  }
}

function mapStateToProperties(state) {
  return {
    overlay: state.tabs.overlay
  };
}

export const OverlayContainer = connect(mapStateToProperties)(Overlay);
