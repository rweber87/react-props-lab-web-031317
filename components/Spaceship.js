import React from 'react';

class Spaceship extends React.Component{
	render() {
		let rocketString
		if(this.props.hasRockets) {
			rocketString = 'installed'
		} else {
			rocketString = 'none installed'
		}

		return (
			<div>
				<h1>{this.props.name}</h1>
				<p>Stats:</p>

				<ul>
					<li>Top-Speed: {this.props.speed}</li>
					<li>Rockets: {rocketString}</li>
					<li>Colors: {this.props.colors.join(', ')}</li>
				</ul>
			</div>
		)
	 
	}
}

Spaceship.defaultProps = {
	hasRockets: false,
	colors: ['black', 'red']
}

export default Spaceship