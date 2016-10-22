import React from 'react'

export default (props) => {


	return (
		<div>
		  <ul>
			<li>Title: {props.title}</li>
			<li>Released in: {props.release_year}</li>
			<li>Filming Location: {props.location}</li>
			<li>Starring: {props.actors}</li>
			<li>Directed by: {props.director}</li>
			<li>Written by: {props.writer}</li>
			<li>Produced by: {props.production_company}</li>
		  </ul>
		</div>
	)
}