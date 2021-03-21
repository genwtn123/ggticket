const express = require('express')
const router = express.Router()

router.get('/:page', (req, res) => {
    res.send(`${req.params.page}`)
})


module.exports = router