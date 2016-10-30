import React from 'react'
import {List, ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'

export default (props) => {
	//format actors
	let actors = []
	if(props.actor_1) actors.push(props.actor_1)
	if(props.actor_2) actors.push(props.actor_2)
	if(props.actor_3) actors.push(props.actor_3)
	actors = actors.join(', ')

	//Ensure list item text is wrapped correctly

	return (
		<div>
		  <List>
			<ListItem 
			disabled={true}
			leftAvatar={<Avatar src ='https://cdn2.iconfinder.com/data/icons/cinema-and-television/500/Entertainment_film_film_reel_film_roll_movie_reel_roll_theate-512.png' />}
			>{props.title} <small>{props.release_year}</small>
			</ListItem>
			<ListItem 
				disabled={true} 
				primaryText='Filmed at: ' 
				secondaryText={props.locations} 
				secondaryTextLines={2}>
				</ListItem>
			<ListItem 
				disabled={true} 
				primaryText='Starring: ' 
				secondaryText={actors} 
				secondaryTextLines={2}>
				</ListItem>
			<ListItem 
				disabled={true} 
				primaryText='Directed by: ' 
				secondaryText={props.director}>
				</ListItem>
			<ListItem 
				disabled={true} 
				primaryText={props.fun_facts ? `Fun Fact: ` : ``} 
				secondaryText={props.fun_facts ? props.fun_facts : ``} 
				secondaryTextLines={2}
				></ListItem>
		  </List>
		</div>
	)
}