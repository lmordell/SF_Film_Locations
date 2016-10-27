import React from 'react'
import {List, ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'

export default (props) => {
	let actors = []
	if(props.actor_1) actors.push(props.actor_1)
	if(props.actor_2) actors.push(props.actor_2)
	if(props.actor_3) actors.push(props.actor_3)
	actors = actors.join(', ')

	return (
		<div>
		  <List>
			<ListItem 
			disabled={true}
			leftAvatar={<Avatar src ='https://cdn2.iconfinder.com/data/icons/cinema-and-television/500/Entertainment_film_film_reel_film_roll_movie_reel_roll_theate-512.png' />}
			>{props.title} <small>{props.release_year}</small>
			</ListItem>
			<ListItem disabled={true} primaryText='Filmed at: ' secondaryText={props.locations}></ListItem>
			<ListItem disabled={true} primaryText='Starring: ' secondaryText={actors}></ListItem>
			<ListItem disabled={true} primaryText='Directed by: ' secondaryText={props.director}></ListItem>
		  </List>
		</div>
	)
}