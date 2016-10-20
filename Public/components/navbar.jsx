import React, { Component } from 'react'
import { AppBar, Drawer, MenuItem } from 'material-ui/'

export default class NavBar extends Component {
  constructor (props) {
    super(props)

    this.state = { open: false }

    this.handleOpenSideBar = this.handleOpenSideBar.bind(this)
  }

  handleOpenSideBar () {
    this.setState({ open: !this.state.open })
  }

  render () {
    const forceNavDown = { 'top': '72px' }

    return (
      <div className='nav'>
        <AppBar onLeftIconButtonTouchTap={this.handleOpenSideBar} title='SF Film Locations' iconClassNameRight='muidocs-icon-navigation-expand-more' />
        <Drawer containerStyle={forceNavDown} open={this.state.open}>
          <MenuItem>
          <input placeholder='Search locations' />
          </MenuItem>
          <MenuItem> Details
          </MenuItem>
        </Drawer>
      </div>
    )
  }
}
