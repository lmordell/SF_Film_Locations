const rp = require('request-promise')
const request = require('request')
const db = require('../db/db')
const config = require('../config')

const getDefaultMovies = (req, res) => {
  db.Movies.findAll()
    .then(movies => res.status(200).send(movies))
    .catch(err => res.status(404).send(err))
}

const addDefaultMovie = (req, res) => {
  db.Movies.create({
    title: req.body.title,
    release_year: req.body.release_year,
    location: req.body.location,
    fun_facts: req.body.fun_facts,
    production_company: req.body.production_company,
    distributor: req.body.distributor,
    director: req.body.director,
    writer: req.body.writer,
    actors: req.body.actors,
    lat: req.body.lat,
    lon: req.body.lon
  })
    .then(movie => res.status(201).send(movie))
    .catch(err => res.status(404).send(err))
}

const getMovieData = (req, res) => {
  const options = { method: 'GET',
    url: 'https://data.sfgov.org/resource/wwmu-gmzc.json',
    qs: { title: req.query.title },
    headers: { 'cache-control': 'no-cache',
      'x-app-token': config.token,
    'content-type': 'application/json' },
    json: true
  }

  rp(options)
    .then(movies => {
      // declare as const to access movies array in subsequent .then statement
      const films = movies
      // Format returned movie locations to query google geocode api to get lat/lng
      const queries = movies.map(movie => `${movie.locations.split(' ').join('+')}+San+Francisco`)

      return Promise.all(queries.map((address) => {

        const geoCodeOptions = { method: 'GET',
          url: 'https://maps.googleapis.com/maps/api/geocode/json',
          qs: { address: address },
          headers: { 'cache-control': 'no-cache',
            'key': config.google_api_token,
          'content-type': 'application/json' },
          json: true
        }

        return rp(geoCodeOptions)
      }))
        .then(locations => {
          // Add lat / lng to each film
          films.forEach((film, i) => {
            film.lat = locations[i].results[0].geometry.location.lat
            film.lng = locations[i].results[0].geometry.location.lng
          })

          res.status(200).send(films)
        })
    })
    .catch(err => res.status(404).send(err))
}

module.exports = {
  getDefaultMovies: getDefaultMovies,
  addDefaultMovie: addDefaultMovie,
  getMovieData: getMovieData
}
