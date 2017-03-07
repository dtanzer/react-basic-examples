import React from 'react';
import joint from 'jointjs';

export class Station extends React.Component {
	render() {
		//Allright, this is how we render a JointJS rectangle, but where should I put it?
		const station = this.props.station;

		const rect = new joint.shapes.basic.Rect({
			position: { x: station.x, y: station.y },
			size: { width: 100, height: 30 },
			attrs: {
				rect: { fill: 'blue' },
				text: { text: station.name, fill: 'white' }
			}
		});
		rect.set('id', station.id);

		rect.on('change:position', (event) => {
			this.props.onChangedPosition(station.id, event.attributes.position.x, event.attributes.position.y);
		});

		return <div>FIXME Render station: {station.name}</div>;
	}
}
