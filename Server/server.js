const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const routesMain = require('./routes_main')

// Requiring DB
const db = require('./db/db').main

const app = express()

// App level middleware
app.use(bodyParser())
app.use(morgan('dev'))
app.use(express.static('Public'))

// Redirect all request to routes main
app.use('/', routesMain)

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`server is listening on port ${port}`))
