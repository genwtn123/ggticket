const express = require('express')
const router = express.Router()
const createadController = require('../controllers/createad')

router.post('/create', createadController.createAd)


module.exports = router