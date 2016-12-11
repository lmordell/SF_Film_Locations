const rp = require('request-promise') //switch to axios if possible
const axios = require('axios') 
const config = require('../config')
const Promise = require('bluebird')
const PromiseThrottle = require('promise-throttle')

const getMovieData = (req, res) => {
    // Get data from api via movie title  
    const options = {
        method: 'GET',
        url: 'https://data.sfgov.org/resource/wwmu-gmzc.json',
        qs: { title: req.query.title },
        headers: {
            'cache-control': 'no-cache',
            'x-app-token': config.film_data_token,
            'content-type': 'application/json'
        },
        json: true
    }

    rp(options)
      .then(movies => {
        // console.log('movie title', movies)
        // declare as const to access movies array in subsequent .then statement
        const films = movies
            // Format returned movie locations to query google geocode api to get lat/lng
        const queries = movies.map(movie => `${movie.locations.split(' ').join('+')}+San+Francisco`)
          
        return Promise.all(queries.map(address => {

          return rp({
              method: 'GET',
              url: 'https://maps.googleapis.com/maps/api/geocode/json', 
              qs: { address: address },
              headers: {
                'cache-control': 'no-cache',
                'key': config.google_api_token,
                'content-type': 'application/json'
              },
              json: true
          }) 
        }))  
      .then(locations => {
                    console.log('movie locations', locations.results)
                    // Add lat / lng to each film
                    films.forEach((film, i) => {
                        film.lat = locations[i].results[0].geometry.location.lat
                        film.lng = locations[i].results[0].geometry.location.lng
                    })
                    res.status(200).json({ films: films, status: 200 })
            })
      })
      .catch(err => res.status(404).json({ error: err, status: 404 }))
}

module.exports = getMovieData

