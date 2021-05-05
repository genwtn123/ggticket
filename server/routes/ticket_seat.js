const express = require('express')
const router = express.Router()
const ticket_seatController = require('../controllers/ticket_seat')



router.post('/book', ticket_seatController.bookSeat)





module.exports = router