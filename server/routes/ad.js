const express = require('express')
const router = express.Router()
const adController = require('../controllers/ad')



router.post('/create', adController.createAd)
router.put('/edit/:ad_id', adController.editAd)
router.delete('/delete/:ad_id', adController.deleteAd)



module.exports = router