import React from 'react'
import {List, ListItem} from 'material-ui/List'

export default (props) => {


	return (
		<div>
		  <List>
			<ListItem disabled={true}>Title: {props.title}</ListItem>
			<ListItem disabled={true}>Released in: {props.release_year}</ListItem>
			<ListItem disabled={true}>Filming Location: {props.location}</ListItem>
			<ListItem disabled={true}>Starring: {props.actors}</ListItem>
			<ListItem disabled={true}>Directed by: {props.director}</ListItem>
			<ListItem disabled={true}>Written by: {props.writer}</ListItem>
			<ListItem disabled={true}>Produced by: {props.production_company}</ListItem>
		  </List>
		</div>
	)
}