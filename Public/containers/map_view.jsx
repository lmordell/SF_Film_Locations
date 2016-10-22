import React, { Component } from 'react'
import { connect } from 'react-redux'

// Google Maps React components
import { GoogleMap, GoogleMapLoader, Marker } from 'react-google-maps'
import { default as FaSpinner } from 'react-icons/lib/fa/spinner'
import { default as ScriptjsLoader } from 'react-google-maps/lib/async/ScriptjsLoader'

// Dispatch
import { updateActiveMovie } from '../actions/actions_movies'

class Map extends Component {
  constructor (props) {
    super(props)

    this.state = {
      defaultPosition: {
        lat: 37.77493,
        lon: -122.419416
      }
    }
    this.renderMarkers = this.renderMarkers.bind(this)
  }

  renderMarkers () {
    const { movies, updateActiveMovie } = this.props
    return movies.movieData.map((movie) => {
      return <Marker key={movie.id} defaultPosition={{lat: movie.lat, lng: movie.lon}} onClick={() => updateActiveMovie(movie)} />
    })
  }

  render () {
    const { lat, lon } = this.state.defaultPosition
    console.log('props in map', this.props)
    return (

      <ScriptjsLoader
        hostname={"maps.googleapis.com"}
        pathname={"/maps/api/js"}
        query={{ key: 'AIzaSyBi5gLmdXNTcFlB04hUijdJ_3fdEUb8bkA',  libraries: 'geometry,drawing,places'}}
        loadingElement={<div>
                          <FaSpinner />
                        </div>}
        containerElement={<div className='map' />}
        googleMapElement={<GoogleMap defaultZoom={13} defaultCenter={{lat: lat, lng: lon }}>
                            {this.renderMarkers()}
                          </GoogleMap>} />
    )
  }
}

function mapStateToProps ({movies}) {
  return { movies}
}

export default connect(mapStateToProps, {updateActiveMovie})(Map)
