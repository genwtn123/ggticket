const express = require('express')
const router = express.Router()
const registerAdminController = require('../controllers/register')


router.post('/admin', registerAdminController.registerAdmin)
router.post('/customer', registerAdminController.registerCustomer)


module.exports = router