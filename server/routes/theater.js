const express = require('express')
const router = express.Router()
const theaterController = require('../controllers/theater')


router.get('/', theaterController.getTheater)
router.get('/a', theaterController.getTheater2)
router.post('/add', theaterController.addTheater)
router.delete('/delete/:id', theaterController.delTheater)
router.put('/edit/:id', theaterController.editTheater)
router.put('/edit/a/:id', theaterController.editTheater2)
router.put('/seat/s/:id', theaterController.editSeat)


module.exports = router