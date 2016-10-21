import React, { Component } from 'react'
import Geosuggest from 'react-geosuggest'
import { AppBar, Drawer, MenuItem, TextField } from 'material-ui/'

export default class NavBar extends Component {
  constructor (props) {
    super(props)

    this.state = { open: false, search: '' }

    this.handleOpenSideBar = this.handleOpenSideBar.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
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
    }, 200)
  }

  handleOpenSideBar () {
    this.setState({ open: !this.state.open })
  }

  handleSearch (e) {
    this.setState({ search: e.target.value })
  }

  render () {
    const forceNavDown = { 'top': '64px' }

    return (
      <div className='nav'>
        <AppBar onLeftIconButtonTouchTap={this.handleOpenSideBar} title='SF Film Locations' iconClassNameRight='muidocs-icon-navigation-expand-more' />
        <Drawer containerStyle={forceNavDown} width={272} open={this.state.open}>
          <MenuItem>
          <TextField
            id='searchTextField'
            placeholder=''
            floatingLabelText='Look for Film Locations'
            fullWidth={true}
            onChange={this.handleSearch} />
          </MenuItem>
        </Drawer>
      </div>
    )
  }
}
