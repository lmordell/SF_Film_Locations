import React from 'react'

const filmOptions = [
  {
    letter: '#',
    movies: [ { title: '50 First Dates' }]
  },
  {
    letter: 'A',
    movies: [ { title: 'About a Boy' }, { title: 'Ant-Man' }]
  },
  {
    letter: 'B',
    movies: [ { title: 'Basic Instinct' }, { title: 'Blue Jasmine'} ]
  },
  {
    letter: 'D',
    movies: [ { title: 'Dawn of the Planet of the Apes' } ]
  },
  {
    letter: 'M',
    movies: [ { title: 'Mrs. Doubtfire' }]
  }
]

function escapeRegexCharacters (str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export const getSuggestions = value => {
  const escapedValue = escapeRegexCharacters(value.trim())
  if (escapedValue === '') {
    return []
  }

  const regex = new RegExp('^' + escapedValue, 'i')

  return filmOptions.map(section => {
    return {
      letter: section.letter,
      titles: section.movies.filter(film => regex.test(film.title))
    }
  })
}

export function getSuggestionValue (suggestion) {
  return suggestion.title
}

export function getSectionSuggestions (section) {
  return section.titles
}

export function renderSectionTitle (section) {
  return (
    <strong>{section.letter}</strong>
  )
}

export function renderSuggestion (suggestion) {
  return (
    <span>{suggestion.title}</span>
  )
}
