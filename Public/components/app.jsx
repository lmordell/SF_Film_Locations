import React, { Component } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { AppBar, Drawer, MenuItem } from 'material-ui/'
injectTapEventPlugin()

import NavBar from './NavBar'
import Map from './map_view'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      markers: [{
        position: {
          lat: 37.77493,
          lng: -122.419416
        },
        key: 'San Francisco',
        defaultAnimation: 2
      }]
    }
  }

  render () {
    const {lat, lng} = this.state.markers[0].position
    return (
      <div>
        <NavBar />
        <Map lat={lat} lon={lng} />
      </div>
    )
  }
}
