import React, { Component } from 'react'
import { connect } from 'react-redux'

// Google Maps React components
import { GoogleMap, GoogleMapLoader, Marker, InfoWindow } from 'react-google-maps'
import ReactStreetview from 'react-streetview'
import { default as FaSpinner } from 'react-icons/lib/fa/spinner'
import { default as ScriptjsLoader } from 'react-google-maps/lib/async/ScriptjsLoader'

//Material UI components
import Snackbar from 'material-ui/Snackbar'

// Dispatch
import { updateActiveMovie, getDefaultMovies } from '../actions/actions_movies'

//Google API Key
import apiKey from '../utils/config'

//StreetView Options
const streetViewPanoramaOptions = {
            position: {lat: 46.9171876, lng: 17.8951832},
            pov: {heading: 100, pitch: 0},
            zoom: 1
        }

class Map extends Component {
  constructor (props) {
    super(props)

    this.state = {
      defaultPosition: {
        lat: 37.7943732,
        lng: -122.4133368
      },
      showInfo: {},
      showFetchMovieDataError: false
    }
    this.renderMarkers = this.renderMarkers.bind(this)
    this.renderInfoWindow = this.renderInfoWindow.bind(this)
  }

  componentWillMount () {
    const { getDefaultMovies } = this.props
    //On page load, get locations for Mrs. Doubtfire as default
    getDefaultMovies()
  }

  componentWillReceiveProps(nextProps) {
    const { status } = this.props.movies
    if(nextProps.movies.status === 404) {
      this.setState({ showFetchMovieDataError: true })
    }
    console.log('this props in map: ', this.props.movies)
  }

  //function to setState on dynamically rendered keys
  renderInfoWindow(boolean, index) {
  let showInfo = {}
    showInfo[index] = boolean
    this.setState(showInfo)
  }

  updateStreetView(lat,  lng) {
    streetViewPanoramaOptions.position = { lat: lat, lng: lng }
  }

  renderMarkers () {
    // console.log(this.props)
    const { movies, updateActiveMovie } = this.props
    return movies.movieData.map((movie, i) => {
      //set show info for each marker to false
      this.state.showInfo[i] = false
      return <Marker
               key={i}
               position={{lat: movie.lat, lng: movie.lng}}
               defaultAnimation={2}
               onClick={() => {
                this.updateStreetView(movie.lat, movie.lng)
                this.renderInfoWindow(true, i)
                updateActiveMovie(movie) //Update active movie in state
               }
              }>
              { this.state[i] ?
                    <InfoWindow onCloseclick={(e) => { this.renderInfoWindow(false, i)  }}>
                        <div>
                          <div>{movie.title}</div>
                          <div>{movie.locations}</div>
                          <div style={{ width: '230px', height: '200px' }}>
                            <ReactStreetview 
                            apiKey={apiKey}
                            streetViewPanoramaOptions={streetViewPanoramaOptions} />
                          </div>
                        </div>
                    </InfoWindow>
                    : null
                }
              </Marker>
    })
  }

  render () {
    const { lat, lng } = this.state.defaultPosition
    return (
      <div>
      <Snackbar
          open={this.state.showFetchMovieDataError}
          message='Try searching again or for another film'
          autoHideDuration={4000}
          onRequestClose={() => this.setState({showFetchMovieDataError: false})}
        />
      <ScriptjsLoader
        hostname={"maps.googleapis.com"}
        pathname={"/maps/api/js"}
        query={{ key: apiKey,  libraries: 'geometry,drawing,places'}}
        loadingElement={<div>
                          <FaSpinner />
                        </div>}
        containerElement={<div className='map' />}
        googleMapElement={<GoogleMap defaultZoom={14} defaultCenter={{lat: lat, lng: lng }}>
                            {this.renderMarkers()}
                          </GoogleMap>} />
      </div>
    )
  }
}

function mapStateToProps ({movies}) {
  return { movies }
}

export default connect(mapStateToProps, {updateActiveMovie, getDefaultMovies})(Map)