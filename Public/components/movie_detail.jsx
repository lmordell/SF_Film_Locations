import React from 'react'
import {List, ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'

export default (props) => {
	return (
		<div>
		  <List>
			<ListItem 
			disabled={true}
			leftAvatar={<Avatar src ='https://cdn2.iconfinder.com/data/icons/cinema-and-television/500/Entertainment_film_film_reel_film_roll_movie_reel_roll_theate-512.png' />}
			>{props.title} <small>{props.release_year}</small>
			</ListItem>
			<ListItem disabled={true}>{props.release_year? `Released in: ${props.release_year}` : ``}</ListItem>
			<ListItem disabled={true}>{props.location ? `Filmed at: ${props.location}`: ``}</ListItem>
			<ListItem disabled={true}>{props.actors ? `Starring: ${props.actors}` : ``}</ListItem>
		  </List>
		</div>
	)
}