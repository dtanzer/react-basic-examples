import React from 'react';
import { connect } from 'react-redux';

export class Overlay extends React.Component {
  render() {
    const display = this.props.overlay? "block" : "none";
    const style = {
        background: "rgba(0, 0, 0, 0.5)",
        display: display,
        position: "absolute",
        top: 0, bottom: 0, left: 0, right: 0,
        zIndex: 1000
    };
    return (
      <div style={style}>
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
