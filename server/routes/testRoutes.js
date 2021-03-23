const express = require('express')
const router = express.Router()

router.get('/:page', (req, res) => {
    res.send(`${req.params.page}`)
    // res.send("Hello 12000")
})


module.exports = router