import React, { Component } from 'react'
import Geosuggest from 'react-geosuggest'
import { AppBar, Drawer, MenuItem, TextField } from 'material-ui/'

export default class NavBar extends Component {
  constructor (props) {
    super(props)

    this.state = { open: false }

    this.handleOpenSideBar = this.handleOpenSideBar.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    let input = document.getElementById('searchTextField')
    let autocomplete
    let southWestBounds
    let northEastBounds
    let autoCompleteRestrictions
    // Async - wait for google api to load before defining vals
    setTimeout(() => {
      southWestBounds = new google.maps.LatLng(37.689178, -122.501335)
      northEastBounds = new google.maps.LatLng(37.833844, -122.414818)
      autoCompleteRestrictions = new google.maps.LatLngBounds(southWestBounds, northEastBounds)
      let options = { bounds: autoCompleteRestrictions }
      autocomplete = new google.maps.places.Autocomplete(input, options)
    }, 300)
  }

  handleOpenSideBar () {
    this.setState({ open: !this.state.open })
  }

  handleSubmit (e) {
    e.preventDefault()
    let value = document.getElementById('searchTextField').value
    console.log('value of input', value)
  }

  render () {
    const forceNavDown = { 'top': '64px' }

    console.log(this.state)
    return (
      <div className='nav'>
        <AppBar onLeftIconButtonTouchTap={this.handleOpenSideBar} title='SF Film Locations' iconClassNameRight='muidocs-icon-navigation-expand-more' />
        <Drawer containerStyle={forceNavDown} width={272} open={this.state.open}>
          <MenuItem>
          <form onSubmit={this.handleSubmit}>
            <TextField
              id='searchTextField'
              placeholder=''
              floatingLabelText='Look for Film Locations'
              fullWidth={true} />
          </form>
          </MenuItem>
        </Drawer>
      </div>
    )
  }
}
