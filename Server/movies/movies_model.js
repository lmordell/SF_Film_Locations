const rp = require('request-promise')
const request = require('request')
const db = require('../db/db')

const getDefaultMovies = (req, res) => {
}

const addDefaultMovie = (req, res) => {
  console.log('db', db.Movies)
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

module.exports = {
  getDefaultMovies: getDefaultMovies,
  addDefaultMovie: addDefaultMovie
}
