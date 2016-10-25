const express = require('express')
const router = express.Router()

const movieModel = require('./movies/movies_model')
console.log(movieModel)

router.get('/api/movies/query', (req, res) => {
  movieModel.getMovieData(req, res)
})

router.get('/api/movies/default', (req, res) => {
  movieModel.getDefaultMovies(req, res)
})

router.post('/api/movies/addDefault', (req, res) => {
  movieModel.addDefaultMovie(req, res)
})

module.exports = router
