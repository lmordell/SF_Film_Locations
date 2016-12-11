import React from 'react';
import { Provider } from 'react-redux'
import { NavBar } from '../Public/containers/navbar'
import { shallow } from 'enzyme'

function setup() {
	const props = {
		getMovieQueryData: jest.fn(),
		movies: { movieData: [], activeMovie: {}, status: null }
	}

	const enzymeWrapper = shallow(<NavBar {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('Navbar', () => {
	
	const { enzymeWrapper } = setup()


	it('renders AppBar and open Drawer to the page', () => {
		const appBarProps = enzymeWrapper.find('AppBar').props()
		const drawerProps = enzymeWrapper.find('Drawer').props()

		expect(enzymeWrapper).toBeDefined()
		expect(enzymeWrapper).toMatchSnapshot()

		expect(appBarProps.title).toEqual('San Francisco Film Locations')
		expect(drawerProps.open).toBe(true)


	})

	it('renders drawer with default text', () => {
		const drawer = enzymeWrapper.find('ListItem').props()

		expect(drawer.primaryText).toEqual('Click a marker to get movie details!')

	})

	// it('calls getMovieQueryData fn on form submit', () => {

	// })

	// it('calls the getMovieQueryData fn with the value of the input', () => {

	// })

})