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
        lat: 37.7943732,
        lng: -122.4133368
      }
    }
    this.renderMarkers = this.renderMarkers.bind(this)
  }

  renderMarkers () {
    const { movies, updateActiveMovie } = this.props
    return movies.movieData.map((movie, i) => {
      return <Marker
               key={i}
               defaultPosition={{lat: movie.lat, lng: movie.lng}}
               defaultAnimation={2}
               onClick={() => updateActiveMovie(movie)} />
    })
  }

  render () {
    const { lat, lng } = this.state.defaultPosition
    return (

      <ScriptjsLoader
        hostname={"maps.googleapis.com"}
        pathname={"/maps/api/js"}
        query={{ key: 'AIzaSyBi5gLmdXNTcFlB04hUijdJ_3fdEUb8bkA',  libraries: 'geometry,drawing,places'}}
        loadingElement={<div>
                          <FaSpinner />
                        </div>}
        containerElement={<div className='map' />}
        googleMapElement={<GoogleMap defaultZoom={14} defaultCenter={{lat: lat, lng: lng }}>
                            {this.renderMarkers()}
                          </GoogleMap>} />
    )
  }
}

function mapStateToProps ({movies}) {
  return { movies}
}

export default connect(mapStateToProps, {updateActiveMovie})(Map)
