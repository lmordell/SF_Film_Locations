import React, { Component } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { AppBar, Drawer, MenuItem } from 'material-ui/'
import axios from 'axios'

//Function to allow material ui to handle mobile tap events
injectTapEventPlugin()

import NavBar from '../containers/navbar'
import Map from '../containers/map_view'

export default class App extends Component {
  constructor (props) {
    super(props)
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