import React from 'react';
import joint from 'jointjs';

export class Link extends React.Component {
	render() {
		//This is how we create a link in JointJS, but where should I put it?
		const link = new joint.dia.Link({
			source: { id: this.props.from.id },
			target: { id: this.props.to.id }
		});

		return <div>FIXME Render link: {this.props.from.id} -> {this.props.to.id}</div>;
	}
}
