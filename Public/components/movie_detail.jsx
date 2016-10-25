import React from 'react'
import {List, ListItem} from 'material-ui/List'

export default (props) => {
	return (
		<div>
		  <List>
			<ListItem disabled={true}>{props.title ? `Title: ${props.title}` : ``}</ListItem>
			<ListItem disabled={true}>{props.release_year? `Released in: ${props.release_year}` : ``}</ListItem>
			<ListItem disabled={true}>{props.location ? `Filmed at: ${props.location}`: ``}</ListItem>
			<ListItem disabled={true}>{props.actors ? `Starring: ${props.actors}` : ``}</ListItem>
			<ListItem disabled={true}>{props.director ? `Directed by: ${props.director}` : ``}</ListItem>
			<ListItem disabled={true}>{props.writer ? `Written by: ${props.writer}` : ``}</ListItem>
			<ListItem disabled={true}>{props.production_company ? `Produced by: ${props.production_company}` : ``}</ListItem>
		  </List>
		</div>
	)
}