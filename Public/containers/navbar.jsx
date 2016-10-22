import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AppBar, Drawer, MenuItem, TextField } from 'material-ui/'
import axios from 'axios'

//components
import Movie from '../components/movie_detail'

// utils
import formatAddress from '../utils/format_address'


// Set google autocomplete to component level scope to access throughout component
let autocomplete

class NavBar extends Component {
  constructor (props) {
    super(props)

    this.state = { open: false }

    this.handleOpenSideBar = this.handleOpenSideBar.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    let input = document.getElementById('searchTextField')
    let southWestBounds
    let northEastBounds
    let sfCityBounds
    // Async - wait for google api to load before defining vals
    setTimeout(() => {
      southWestBounds = new google.maps.LatLng(37.689178, -122.501335)
      northEastBounds = new google.maps.LatLng(37.833844, -122.414818)
      sfCityBounds = new google.maps.LatLngBounds(southWestBounds, northEastBounds)
      let options = { bounds: sfCityBounds }
      autocomplete = new google.maps.places.Autocomplete(input, options)
    }, 300)
  }

  handleOpenSideBar () {
    this.setState({ open: !this.state.open })
  }

  handleSubmit (e) {
    e.preventDefault()
    let result = autocomplete.getPlace()
    console.log('result ', result)
    let lat = result.geometry.location.lat()
    let lng = result.geometry.location.lng()
    console.log('lat & lng', [lat, lng])
    let formattedResult = formatAddress(result.address_components)
    axios.get('/api/maps/data', {
      params: {
        locations: formattedResult
      }
    })
      .then(locationResults => console.log('results from location query: ', locationResults))
  }

  render () {
    console.log(this.props.movies.activeMovie)
    // Pushes the material ui siderbar to just below the navbar
    const forceNavDown = { 'top': '64px' }
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
          <MenuItem>
            <Movie {...this.props.movies.activeMovie} />
          </MenuItem>
        </Drawer>
      </div>
    )
  }
}

function mapStateToProps ({movies}) {
  return { movies }
}

export default connect(mapStateToProps)(NavBar)