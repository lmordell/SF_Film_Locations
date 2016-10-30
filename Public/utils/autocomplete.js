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
    movies: [ { title: 'Basic Instinct' }, { title: 'Blue Jasmine'}, { title: 'Bicentennial Man'} ]
  },
  {
    letter: 'D',
    movies: [ { title: 'Dawn of the Planet of the Apes' }, { title: 'Dirty Harry' }, { title: 'Doctor Dolittle' } ]
  },
  {
    letter: 'G',
    movies: [ { title: 'Godzilla' }]
  },
  {
    letter: 'I',
    movies: [ { title: 'Invasion of the Body Snatchers' }]
  },
  {
    letter: 'J',
    movies: [ { title: 'Joy Luck Club' }, { title: 'Junior' }]
  },
  {
    letter: 'M',
    movies: [ { title: 'Mrs. Doubtfire' }, { title: 'Magnum Force' }, { title: 'Milk' }]
  },
  {
    letter: 'N',
    movies: [ { title: 'Need for Speed' }]
  },
  {
    letter: 'P',
    movies: [ { title: 'Patch Adams' }]
  },
  {
    letter: 'S',
    movies: [ { title: 'San Andreas' }, { title: 'Sense8'}, { title: 'So I Married an Axe Murderer'}, { title: 'Steve Jobs'} ]
  },
  {
    letter: 'T',
    movies: [ { title: 'Terminator - Genisys' }, { title: 'The Deadpool' }, { title: 'The Pursuit of Happyness' }, { title: 'The Rock' }, { title: 'The Wedding Planner' }]
  },
  {
    letter: 'V',
    movies: [ { title: 'Vertigo' }]
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
