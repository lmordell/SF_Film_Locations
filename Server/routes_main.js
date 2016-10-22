const express = require('express')
const router = express.Router()

const mapModel = require('./maps/maps_model')
const movieModel = require('./movies/movies_model')
console.log(movieModel)

router.get('/api/maps/data', (req, res) => {
  mapModel.getMapData(req, res)
})

router.get('/api/movies/default', (req, res) => {
  movieModel.getDefaultMovies(req, res)
})

router.post('/api/movies/addDefault', (req, res) => {
  movieModel.addDefaultMovie(req, res)
})

module.exports = router
