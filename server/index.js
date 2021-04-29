const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./sql')
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
const historyRoute = require('./routes/history')
const foodRoute = require('./routes/food')
const ticket_seatRoute = require('./routes/ticket_seat')
const ticket_foodRoute = require('./routes/ticket_food')

const sess = {
    store: new MemoryStore(),
    secret: 'testtest123',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000*60*60
    },
}
app.use(session(sess));
// app.use(express.static('static'))
app.use("/static", express.static(path.join(__dirname, "static")));
// app.use('/files', express.static('files'));
app.use(express.json())
app.use(cors({
    origin:true,
    credentials:true
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
app.use('/history', historyRoute)
app.use('/food', foodRoute)
app.use('/ticketseat', ticket_seatRoute)
app.use('/ticketfood', ticket_foodRoute)

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