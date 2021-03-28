const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const pool = require('./sql')
const morgan = require('morgan')
const config = require('./src/config/config')
const testRouter = require('./routes/testRoutes')
const registerRouter = require('./routes/register')
const loginRouter = require('./routes/login')

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.use((req, res, next) => {
    console.log(`request at ${req.url} method ${req.method}`)
    next()
})

app.use('/test', testRouter)
app.use('/register', registerRouter)
app.use('/login', loginRouter)

app.get('/',async (req, res) => {
    const conn = await pool.getConnection()
    await conn.beginTransaction();

    let test = await conn.query('SELECT username,password FROM mydatabase.USER;')
    await conn.commit()
    console.log(test[0])
})

app.listen(config.port, () => {
    console.log(`server started at port ${config.port}`)
})