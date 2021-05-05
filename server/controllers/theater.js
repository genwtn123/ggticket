const Theater = require('../src/model/Theater')
const Joi = require('joi')

const validtheater = Joi.object({
    theater_size: Joi.string().valid('S','M','L').required(),
    theater_name : Joi.string().required()
})

exports.getTheater = async (req, res, next) => {
    try{
        let theater = new Theater()
        let keep = await theater.getTheater()
        console.log("theater",await theater.getTheater())
        res.send(keep)
    }catch(err){
        console.log(err)
    }
}

exports.getTheater2 = async (req, res, next) => {
    try{
        let theater = new Theater()
        let keep = await theater.getTheater2()
        console.log("theater",await theater.getTheater2())
        res.send(keep)
    }catch(err){
        console.log(err)
    }
}

exports.editSeat = async (req, res, next) => {
    try {
        await valideditSeat.validateAsync(req.body, { abortEarly: false })
        let seat = new Seat(req.params.id, null, null, req.body.seat_status, null, null)
        await seat.editSeat()
        res.send(seat)
    } catch (err) {
        console.log(err)
    }
}

exports.addTheater = async (req, res, next) => {
    try{
        await validtheater.validateAsync(req.body, {abortEarly: false})
        let theater = new Theater(null, req.body.theater_size, req.body.theater_name)
        console.log(theater)
        await theater.addTheater()
        res.send(theater)
    }catch(err){
        console.log(err)
    }
}

exports.delTheater = async (req, res, next) => {
    try{
        if(req.session.userdata.type != "STAFF"){
            res.send("You are not admin")
            return
        }
        let theater = new Theater(req.params.id)
        await theater.delTheater()
        res.send(`delete Theater ${req.params.id}`)
    }catch(err){
        console.log(err)
    }
}

exports.editTheater = async (req, res, next) => {
    try{
        // await validtheater.validateAsync(req.body, {abortEarly: false})
        let theater = new Theater(req.params.id, null, null, req.body.theater_status)
        await theater.editTheater()
        res.send(`edit status Theater ${req.params.id} to ${req.body.theater_status}`)
    }catch(err){
        console.log(err)
    }
}

exports.editTheater2 = async (req, res, next) => {
    try{
        // await validtheater.validateAsync(req.body, {abortEarly: false})
        let theater = new Theater(req.params.id, req.body.theater_size, req.body.theater_name, req.body.theater_status)
        await theater.editTheater2()
        res.send(` ${req.body.theater_status} ${req.body.theater_size} ${req.body.theater_name}`)
    }catch(err){
        console.log(err)
    }
}
