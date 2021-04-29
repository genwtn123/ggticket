const express = require('express')
const router = express.Router()
const ticketController = require('../controllers/ticket')


router.get('/getrecommend', ticketController.getRecommendMovie)
router.post('/booking', ticketController.customerTicket)



module.exports = router