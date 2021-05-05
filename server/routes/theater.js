const express = require('express')
const router = express.Router()
const theaterController = require('../controllers/theater')


router.get('/', theaterController.getTheater)
router.post('/add', theaterController.addTheater)
router.delete('/delete/:id', theaterController.delTheater)
router.put('/edit/:id', theaterController.editTheater)


module.exports = router