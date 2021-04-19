const express = require('express')
const router = express.Router()
const seatController = require('../controllers/seat')



router.post('/add', seatController.addSeat)
router.put('/edit/:id', seatController.editSeat)
router.delete('/delete/:id', seatController.delSeat)




module.exports = router