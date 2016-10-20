const express = require('express')
const router = express.Router()

const mapModel = require('./maps/maps_model')

router.get('/api/maps/data', (req,res) => {
	mapModel.getMapData(req,res)
})

module.exports = router