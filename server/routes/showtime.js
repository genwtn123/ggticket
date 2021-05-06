const express = require('express')
const router = express.Router()
const showtimeController = require('../controllers/showtime')

router.post('/add', showtimeController.addShowtime)
router.put('/edit/:id', showtimeController.editShowtime)
router.delete('/delete/:id', showtimeController.delShowtime)
router.get('/', showtimeController.getShowtime)
router.get('/a', showtimeController.getShowtime2)
router.post('/getseat', showtimeController.getseatinShowtime)

module.exports = router