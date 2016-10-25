// libraries
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AppBar, Drawer, MenuItem, TextField, ListItem } from 'material-ui/'
import Autosuggest from 'react-autosuggest'
import axios from 'axios'

// dispatch
import { getMovieQueryData } from '../actions/actions_movies'

// autocomplete functions
import { getSuggestions, getSuggestionValue, renderSuggestion, renderSectionTitle, getSectionSuggestions } from '../utils/autocomplete'

// components
import Movie from '../components/movie_detail'

class NavBar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      open: true,
      autocompleteVal: '',
      autocompleteSuggestions: []
    }

    this.handleOpenSideBar = this.handleOpenSideBar.bind(this)
    this.renderMovieDetails = this.renderMovieDetails.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this)
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this)
  }

  handleOpenSideBar () {
    this.setState({ open: !this.state.open })
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.getMovieQueryData(this.state.autocompleteVal)
  }

  renderMovieDetails () {
    if (this.props.movies.activeMovie.title) {
      return ( <Movie {...this.props.movies.activeMovie} /> )
    } else {
      return (
        <ListItem primaryText=' Click a marker to get movie details!' secondaryText='Or search for locations in SF!'>
        </ListItem>
      )
    }
  }

  onChange (event, { newValue }) {
    this.setState({
      autocompleteVal: newValue
    })
  }

  onSuggestionsFetchRequested ({ value }) {
    this.setState({
      autocompleteSuggestions: getSuggestions(value)
    })
  }

  onSuggestionsClearRequested () {
    this.setState({
      autocompleteSuggestions: []
    })
  }

  render () {
    // Pushes the material ui siderbar to just below the navbar
    const forceNavDown = { 'top': '64px' }
    const { autocompleteVal, autocompleteSuggestions } = this.state
    const inputProps = {
      placeholder: 'Search by Film Title',
      value: autocompleteVal,
      onChange: this.onChange
    }

    return (
      <div>
        <AppBar onLeftIconButtonTouchTap={this.handleOpenSideBar} title='SF Film Locations' iconClassNameRight='muidocs-icon-navigation-expand-more' />
        <Drawer containerStyle={forceNavDown} width={300} open={this.state.open}>
          <MenuItem>
          <form onSubmit={this.handleSubmit}>
            <Autosuggest
              multiSection={true}
              suggestions={autocompleteSuggestions}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              renderSectionTitle={renderSectionTitle}
              getSectionSuggestions={getSectionSuggestions}
              inputProps={inputProps} />
          </form>
          </MenuItem>
          <MenuItem>
          {this.renderMovieDetails()}
          </MenuItem>
        </Drawer>
      </div>
    )
  }
}

function mapStateToProps ({movies}) {
  return {movies}
}

export default connect(mapStateToProps, {getMovieQueryData})(NavBar)
