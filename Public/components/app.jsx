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
  }

  componentWillMount () {
    const { getDefaultMovies } = this.props
    // in map render the markers

    // Might need redux state for this..
    // On Marker click, 'active movie' gets updated in state, and active movie 
    // data is displayed
    // on the side bar
    getDefaultMovies()
  }

  render () {
    return (
      <div>
        <NavBar />
        <Map />
      </div>
    )
  }
}


export default connect(null, {getDefaultMovies})(App)
