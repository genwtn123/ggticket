const express = require('express')
const router = express.Router()
const ticket_foodController = require('../controllers/ticket_food')



router.post('/buy', ticket_foodController.buyFood)





module.exports = router