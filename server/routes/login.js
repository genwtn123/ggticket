const express = require('express')
const router = express.Router()
const loginController = require('../controllers/login')
const upload = require("../uploader/Upload")

router.post('/', loginController.login)
router.get('/', loginController.checkSession)
router.get('/logout', loginController.logout)
router.get('/user', loginController.getUserInfo)
router.put('/image', upload.single('user_image'), loginController.addimage)
router.put('/password', loginController.changePassword)


module.exports = router