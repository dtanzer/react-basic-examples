import React from 'react';
import ReactDOM from 'react-dom';
import joint from 'jointjs';

import { connect } from 'react-redux';

import { Station } from './Station'
import { Link } from './Link'

export class StationsView extends React.Component {
	constructor(props) {
		super(props);
		this.graph = new joint.dia.Graph();
		this.cells=[];
	}

	renderSubwayLine(lineData, lineId) {
		const links = lineData.map((v, i, l)=>{ return {current: v, next: l[i+1] }}).filter(linkData => linkData.next);
		const renderedLinks = links.map((linkData) => {
			return <Link from={ linkData.current } to={ linkData.next } />
		});
		return renderedLinks;
	}

	renderStation(station) {
		return <Station station={station} onChangedPosition={ this.props.onChangedPosition } />;
	}

	render() {
		const allStations = this.props.stations.u1.concat(this.props.stations.u2);
		const renderedStations = allStations.map(this.renderStation.bind(this));

		const renderedLinksByLine = [this.props.stations.u1, this.props.stations.u2].map(this.renderSubwayLine.bind(this));
		const renderedLinks = renderedLinksByLine.reduce((prev, cur) => { return prev.concat(cur)});

		//Hmm... Somehow this does not work. How do we get our components into the cells?
		const paper = new joint.dia.Paper({
			el: ReactDOM.findDOMNode(this.refs.placeholder),
			width: 600,
			height: 200,
			model: this.graph,
			gridSize: 1
		});

		this.graph.addCells(this.cells);

		return <div ref="placeholder">{renderedStations.concat(renderedLinks)}</div>;
	}
}

function mapStateToProperties(state) {
	return {
		stations: state.stations
	};
}
const actionCreators = {
	onChangedPosition: (id, x, y) => {
		return {
			type: 'STATION_MOVED',
			id: id,
			x: x,
			y: y
		};
	}
}

export const StationsViewContainer = connect(mapStateToProperties, actionCreators)(StationsView);
