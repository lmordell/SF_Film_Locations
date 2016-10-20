const express = require('express')
const router = express.Router()

const mapModel = require('./maps/maps_model')
console.log('mapModel', mapModel.getMapData)

router.get('/api/maps/data', (req,res) => {
	console.log('in router')
	mapModel.getMapData(req,res)
})

module.exports = router