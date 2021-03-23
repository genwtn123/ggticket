const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 12000
const sql = require('./sql')
const testRouter = require('./routes/testRoutes')

app.use(cors())

app.use((req, res, next) => {
    console.log(`request at ${req.url} method ${req.method}`)
    next()
})

app.use('/test', testRouter)

app.get('/', (req, res) => {
    sql.query('SELECT username,password FROM mydatabase.USER;', function (err, recordset) {
            
        if (err) console.log(err)

        // send records as a response
        // res.send(recordset);
        console.log(recordset)
        
    });
})

app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`)
})