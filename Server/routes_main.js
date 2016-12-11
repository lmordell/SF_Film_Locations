const express = require('express')
const router = express.Router()

const getMovieData = require('./movies/movies_model')

router.get('/api/movies/query', (req, res) => {
  getMovieData(req, res)
})

module.exports = router
