import React, { Component } from 'react'

import Map from './map_view'

export default class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
		markers: [{
			position: {
				lat: 37.77493,
				lng: -122.419416
			},
			key: 'San Francisco',
			defaultAnimation: 2
		}]
	}

	}

	render() {
		const {lat, lng} = this.state.markers[0].position
		return (
		<div>
			<h1>This is working</h1>
			<Map lat={lat} lon={lng} />
		</div>
		)
	}
}