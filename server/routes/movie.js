const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movie')



router.post('/add', movieController.addMovie)
router.delete('/delete/:id', movieController.delMovie)
router.put('/edit/:id', movieController.editMovie)
router.get('/', movieController.getMovie)




module.exports = router