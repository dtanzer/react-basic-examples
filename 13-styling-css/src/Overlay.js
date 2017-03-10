import React from 'react';
import { connect } from 'react-redux';
import './Overlay.css'

export class Overlay extends React.Component {
  render() {
    const display = this.props.overlay? "overlayCool" : "notCoolOverlay";
    
    return (
      <div className={display}>
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
