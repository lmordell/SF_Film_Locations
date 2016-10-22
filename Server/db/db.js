const Sequelize = require('sequelize')
const pg = require('pg')
const db = new Sequelize('postgres://paezcevo:7obfs5atYKeQBSqR20J_1_GTrsRgucEi@elmer.db.elephantsql.com:5432/paezcevo')

// Checks if the database has been loaded - appears in the console
db.authenticate()
  .then(function (err) {
    console.log('Successful Connection to the database')
  })
  .catch(function (err) {
    console.log('Cannot connect to the database', err)
  })

const defaultFilms = db.define('defaultFilms', {
  title: {
    type: Sequelize.STRING(50)
  },
  release_year: {
    type: Sequelize.INTEGER
  },
  location: {
    type: Sequelize.STRING(100)
  },
  fun_facts: {
    type: Sequelize.STRING(200)
  },
  production_company: {
    type: Sequelize.STRING(100)
  },
  distributor: {
    type: Sequelize.STRING(100)
  },
  director: {
    type: Sequelize.STRING(20)
  },
  writer: {
    type: Sequelize.STRING(20)
  },
  actors: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  lat: {
    type: Sequelize.FLOAT
  },
  lon: {
    type: Sequelize.FLOAT
  }
},
  {  timestamps: false

  })

db.sync()

module.exports = { main: db, Movies: defaultFilms}
