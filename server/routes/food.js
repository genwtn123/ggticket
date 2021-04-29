const express = require('express')
const router = express.Router()
const foodController = require('../controllers/food')
const upload = require("../uploader/Upload")

router.get('/', foodController.getFood)
router.post('/create',upload.single('food_image'), foodController.createFood)
router.put('/edit/:food_id',upload.single('food_image'), foodController.editFood)
router.delete('/delete/:food_id', foodController.deleteFood)
router.put('/hide/:food_id', foodController.hideFood)



module.exports = router