const express = require('express')
const router = express.Router()
const adController = require('../controllers/ad')
const upload = require("../uploader/Upload")


router.post('/create',upload.single('image'), adController.createAd)
router.put('/edit/:ad_id', adController.editAd)
router.delete('/delete/:ad_id', adController.deleteAd)



module.exports = router