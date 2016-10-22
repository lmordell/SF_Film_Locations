import React, { Component } from 'react'
import { GoogleMap, GoogleMapLoader, Marker } from 'react-google-maps'
import { connect } from 'react-redux'

import { default as FaSpinner } from 'react-icons/lib/fa/spinner'
import { default as ScriptjsLoader } from 'react-google-maps/lib/async/ScriptjsLoader'

class Map extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    console.log('this props', this.props)
  }

  render () {
    return (

      <ScriptjsLoader
        hostname={"maps.googleapis.com"}
        pathname={"/maps/api/js"}
        query={{ key: 'AIzaSyBi5gLmdXNTcFlB04hUijdJ_3fdEUb8bkA',  libraries: 'geometry,drawing,places'}}
        loadingElement={<div>
                          <FaSpinner />
                        </div>}
        containerElement={<div className='map' />}
        googleMapElement={<GoogleMap defaultZoom={13} defaultCenter={{lat: this.props.lat, lng: this.props.lon }}>
                            <Marker {...this.props.markerProps} />
                          </GoogleMap>} />
    )
  }
}

function mapStateToProps ({movies}) {
  return { movies}
}

export default connect(mapStateToProps)(Map)