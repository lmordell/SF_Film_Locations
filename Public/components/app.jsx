import React, { Component } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { AppBar, Drawer, MenuItem } from 'material-ui/'
import { connect } from 'react-redux'
import axios from 'axios'

// Dispatches
import { getDefaultMovies } from '../actions/actions_movies'

injectTapEventPlugin()

import NavBar from './navbar'
import Map from '../containers/map_view'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      defaultPosition: {
        lat: 37.77493,
        lng: -122.419416
      }
    }
  }

  componentWillMount () {
    const { getDefaultMovies } = this.props
    // before component mounts, get all movies from 2015
    // in next promise call get the lat / long of each films location
    // add the lat / long prop to each film
    // set the state of defaultResults to data of film + lat long
    // pass state to map
    // in map render the markers

    // Might need redux state for this..
    // On Marker click, 'active movie' gets updated in state, and active movie 
    // data is displayed
    // on the side bar
    getDefaultMovies()
      .then((movies) => {
        console.log('movies', movies)
      })
  }

  render () {
    const {lat, lng} = this.state.defaultPosition
    return (
      <div>
        <NavBar />
        <Map lat={lat} lon={lng} />
      </div>
    )
  }
}

// function mapStateToProps ({movies}) {
//   return { movies}
// }

export default connect(null, {getDefaultMovies})(App)
