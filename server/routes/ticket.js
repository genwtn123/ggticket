const express = require('express')
const router = express.Router()
const ticketController = require('../controllers/ticket')
const uploder = require('../uploader/Upload')


router.get('/getrecommend', ticketController.getRecommendMovie)
router.post('/booking',uploder.none(), ticketController.customerTicket)



module.exports = router