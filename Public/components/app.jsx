import React, { Component } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { AppBar, Drawer, MenuItem } from 'material-ui/'
import { connect } from 'react-redux'
import axios from 'axios'

// Dispatches
import { getDefaultMovies } from '../actions/actions_movies'

injectTapEventPlugin()

import NavBar from '../containers/navbar'
import Map from '../containers/map_view'

class App extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
    const { getDefaultMovies } = this.props
    //On page load, get locations for Mrs. Doubtfire as default
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
