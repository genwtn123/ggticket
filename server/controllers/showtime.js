const Showtime = require('../src/model/Showtime')
const Joi = require('joi')
const { valid } = require('joi')



const validshowtime = Joi.object({
    time_start: Joi.date().timestamp().iso().required(),
    time_finish: Joi.date().timestamp().iso().min(Joi.ref('time_start')).required(),
    movie_id: Joi.number().integer().required(),
    staff_id:Joi.number().integer().required(),
    theater_id:Joi.number().integer().required(),
})

exports.getseatinShowtime = async (req, res, next) => {
    try{
        let showtime = new Showtime(req.body.showtime_no, null, null, null, null, null, req.body.theater_id)
        let keep = await showtime.getseatinShowtime()
        res.send(keep)
    }catch(err){
        console.log(err)
    }
}

exports.getShowtime = async (req, res, next) => {
    try{
        let showtime = new Showtime
        let keep = await showtime.getShowtime()
        res.send(keep)
    }catch(err){
        console.log(err)
    }
}

exports.addShowtime = async (req, res, next) => {
    try{
        await validshowtime.validateAsync(req.body, {abortEarly:false})
        let showtime= new Showtime(null, req.body.time_start, req.body.time_finish, true, req.body.movie_id, req.body.staff_id, req.body.theater_id)
        await showtime.addShowtime()
        res.send(showtime)
    }catch(err){
        console.log(err)
    }
}

exports.delShowtime = async (req, res, next) => {
    let showtime = new Showtime(req.params.id)
    try{
        await showtime.delShowtime()
        res.send(`delete Showtime ${req.params.id}`)
    }catch(err){
        console.log(err)
    }
}

exports.editShowtime = async (req, res, next) => {
    try{
        await validshowtime.validateAsync(req.body, {abortEarly:false})
        let showtime = new Showtime(req.params.id, req.body.time_start, req.body.time_finish, req.body.movie_id, req.body.staff_id)
        await showtime.editShowtime()
        res.send(showtime)
    }catch(err){
        console.log(err)
    }
}