const request = require('request')

function getMapData (req, res) {
  const options = { method: 'GET',
    url: 'https://data.sfgov.org/resource/wwmu-gmzc.json',
    qs: { locations: req.query.locations },
    headers: { 'cache-control': 'no-cache',
      'x-app-token': 'YY1DPC0Yb3fwXPLdLl1RHlH6U',
    'content-type': 'application/json' },
    json: true
  }

  request(options, function (error, response, body) {
    if (error) throw new Error(error)
    res.status(200).send(body)
  })
}

module.exports = { getMapData: getMapData }
