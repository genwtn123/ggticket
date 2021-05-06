const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movie')
const upload = require("../uploader/Upload")



router.post('/add',upload.single("movie_image"), movieController.addMovie)
router.delete('/delete/:id', movieController.delMovie)
router.put('/edit/:id',upload.single("movie_image"), movieController.editMovie)
router.get('/', movieController.getMovie)





module.exports = router