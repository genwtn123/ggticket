const Showtime = require('../src/model/Showtime')
const Joi = require('joi')
const { valid } = require('joi')
// const Connection = require('mysql2/typings/mysql/lib/Connection')
const pool = require('../sql')


const validshowtime = Joi.object({
    time_start: Joi.date().timestamp().iso().required(),
    time_finish: Joi.date().timestamp().iso().min(Joi.ref('time_start')).required(),
    movie_id: Joi.number().integer().required(),
    staff_id: Joi.number().integer().required(),
    theater_id: Joi.number().integer().required(),
}).external(async (obj, helpers) => {
    let stmt = 'select time_start, time_finish from SHOWTIME \
             where theater_id = ?'
    let show = await pool.query(stmt, obj.theater_id)
    for(let showtime of show[0]){
        if(obj.time_start >= showtime.time_start && obj.time_start <= showtime.time_finish || obj.time_finish >= showtime.time_start && obj.time_finish <= showtime.time_finish){
            const message = "This period already used"

            throw new Joi.ValidationError(message, {message})
        }else if(showtime.time_start >= obj.time_start && showtime.time_start <= obj.time_finish || showtime.time_finish >= obj.time_start && showtime.time_finish <= obj.time_finish){
            const message = "This period already used"
            throw new Joi.ValidationError(message, {message})
        }
    }
    return obj
})


const validgetseat = Joi.object({
    showtime_no: Joi.number().integer().required(),
    theater_id: Joi.number().integer().required()
})

exports.getseatinShowtime = async (req, res, next) => {
    try {
        await validgetseat.validateAsync(req.body, { abortEarly: false })
        let showtime = new Showtime(req.body.showtime_no, null, null, null, null, null, req.body.theater_id)
        let keep = await showtime.getseatinShowtime()
        res.send(keep)
    } catch (err) {
        console.log(err)
    }
}

exports.getShowtime = async (req, res, next) => {
    try {
        let showtime = new Showtime
        let keep = await showtime.getShowtime()
        res.send(keep)
    } catch (err) {
        console.log(err)
    }
}

exports.addShowtime = async (req, res, next) => {
    try {
        await validshowtime.validateAsync(req.body, { abortEarly: false })
        let showtime = new Showtime(null, req.body.time_start, req.body.time_finish, true, req.body.movie_id, req.body.staff_id, req.body.theater_id)
        await showtime.addShowtime()
        res.send(showtime)
    } catch (err) {
        console.log(err)
        res.send(err)
    }
}

exports.delShowtime = async (req, res, next) => {
    let showtime = new Showtime(req.params.id)
    try {
        await showtime.delShowtime()
        res.send(`delete Showtime ${req.params.id}`)
    } catch (err) {
        console.log(err)
    }
}

exports.editShowtime = async (req, res, next) => {
    try {
        await validshowtime.validateAsync(req.body, { abortEarly: false })
        let showtime = new Showtime(req.params.id, req.body.time_start, req.body.time_finish,null, req.body.movie_id, req.body.staff_id)
        await showtime.editShowtime()
        res.send(showtime)
    } catch (err) {
        console.log(err)
    }
}