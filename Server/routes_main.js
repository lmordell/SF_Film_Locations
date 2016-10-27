const express = require('express')
const router = express.Router()

const movieModel = require('./movies/movies_model')

router.get('/api/movies/query', (req, res) => {
  movieModel.getMovieData(req, res)
})

module.exports = router
