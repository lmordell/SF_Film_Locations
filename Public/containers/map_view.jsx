import React, { Component } from 'react'
import { connect } from 'react-redux'

// Google Maps React components
import { GoogleMap, GoogleMapLoader, Marker, InfoWindow } from 'react-google-maps'
import { default as FaSpinner } from 'react-icons/lib/fa/spinner'
import { default as ScriptjsLoader } from 'react-google-maps/lib/async/ScriptjsLoader'

// Dispatch
import { updateActiveMovie, getDefaultMovies } from '../actions/actions_movies'

class Map extends Component {
  constructor (props) {
    super(props)

    this.state = {
      defaultPosition: {
        lat: 37.7943732,
        lng: -122.4133368
      },
      showInfoWindow: false
    }
    this.renderMarkers = this.renderMarkers.bind(this)
  }

  componentWillMount () {
    const { getDefaultMovies } = this.props
    //On page load, get locations for Mrs. Doubtfire as default
    getDefaultMovies()
  }



  renderMarkers () {
    const { movies, updateActiveMovie } = this.props
    return movies.movieData.map((movie, i) => {
      return <Marker
               key={i}
               defaultPosition={{lat: movie.lat, lng: movie.lng}}
               defaultAnimation={2}
               onClick={() => {
                this.setState({ showInfoWindow: true })
                updateActiveMovie(movie) //Update active movie in state
               }
              }>
              {
              this.state.showInfo ?
                <InfoWindow onCloseclick={() => { this.setState({ showInfoWindow: false }) }}>
                  <div>{movie.title}</div>
                </InfoWindow>
                : null
              }
              </Marker>
    })
  }

  render () {
    const { lat, lng } = this.state.defaultPosition
    console.log(this.props.movies)
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

export default connect(mapStateToProps, {updateActiveMovie, getDefaultMovies})(Map)
