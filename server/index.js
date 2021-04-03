const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./sql')
const morgan = require('morgan')
const config = require('./src/config/config')
const session = require('express-session')
const path = require("path")
const multer = require('multer')
const upload = multer()


const testRouter = require('./routes/testRoutes')
const registerRouter = require('./routes/register')
const loginRouter = require('./routes/login')
const { MemoryStore } = require('express-session')
const adRouter = require('./routes/ad')
const ticketRouter = require('./routes/ticket')
const movieRouter = require('./routes/movie')
const theaterRoute = require('./routes/theater')
const showtimeRoute = require('./routes/showtime')
const paymentRoute = require('./routes/payment')
const seatRoute = require('./routes/seat')

app.use(express.static('static'))
app.use(upload.array())
app.use(morgan('combined'))
app.use(express.json())
app.use(cors())
app.use(session({
    store: new MemoryStore(),
    secret: 'testtest123',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: false,
        maxAge: 1000*60
    }
}))

app.use((req, res, next) => {
    console.log(`request at ${req.url} method ${req.method}`)
    // console.log(req.session.userdata)
    next()
})

app.use('/test', testRouter)
app.use('/register', registerRouter)
app.use('/login', loginRouter)
app.use('/ad', adRouter)
app.use('/ticket', ticketRouter)
app.use('/movie', movieRouter)
app.use('/theater', theaterRoute)
app.use('/showtime', showtimeRoute)
app.use('/payment', paymentRoute)
app.use('/seat', seatRoute)

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