const rp = require('request-promise')
const config = require('../config')

const getMovieData = (req, res) => {

  // Get data from api via movie title
  const options = { method: 'GET',
    url: 'https://data.sfgov.org/resource/wwmu-gmzc.json',
    qs: { title: req.query.title },
    headers: { 'cache-control': 'no-cache',
    'x-app-token': config.film_data_token,
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
  getMovieData: getMovieData
}
