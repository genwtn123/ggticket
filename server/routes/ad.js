const express = require('express')
const router = express.Router()
const adController = require('../controllers/ad')
const upload = require("../uploader/Upload")

router.get('/', adController.getAd)
router.post('/create',upload.single('ad_image'), adController.createAd)
router.put('/edit/:ad_id',upload.single('ad_image'), adController.editAd)
router.delete('/delete/:ad_id', adController.deleteAd)



module.exports = router