const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 12000

const testRouter = require('./routes/testRoutes')

app.use(cors())

app.use((req, res, next) => {
    console.log(`request at ${req.url} method ${req.method}`)
    next()
})

app.use('/test', testRouter)

app.get('/', (req, res) => {
    res.send("KUY")
})

app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`)
})