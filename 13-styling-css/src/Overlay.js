import React from 'react';
import { connect } from 'react-redux';

import './Overlay.css';

export class Overlay extends React.Component {
  render() {
    const cssClass = this.props.overlay? "overlay block" : "overlay";
    return (
      <div className={cssClass}>
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
