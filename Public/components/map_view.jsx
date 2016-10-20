import React, { Component } from 'react'
import { GoogleMap, GoogleMapLoader, Marker } from 'react-google-maps'

import {default as FaSpinner} from "react-icons/lib/fa/spinner";
import {default as ScriptjsLoader} from "react-google-maps/lib/async/ScriptjsLoader";

export default class Map extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		console.log('this props', this.props)
		return (

			<ScriptjsLoader
  				  hostname={"maps.googleapis.com"}
  				  pathname={"/maps/api/js"}
  				  query={{ key: 'AIzaSyBi5gLmdXNTcFlB04hUijdJ_3fdEUb8bkA' , libraries: "geometry,drawing,places"}}
				  loadingElement={
				    <div>
				      <FaSpinner />
				    </div>
				  }
				  containerElement={
				    <div className='map' />
				  }
				  googleMapElement={
				    <GoogleMap
				      defaultZoom={3}
				      defaultCenter={
					           	{lat: this.props.lat,
					           	 lng: this.props.lon
								}}
				    >
				      <Marker {...this.props.markerProps} />
				    </GoogleMap>
				  }
				/>
		)
	}
}