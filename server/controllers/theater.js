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
    let theater = new Theater(req.params.id)
    try{
        await theater.delTheater()
        res.send(`delete Theater ${req.params.id}`)
    }catch(err){
        console.log(err)
    }
}

exports.editTheater = async (req, res, next) => {
    try{
        await validtheater.validateAsync(req.bod, {abortEarly: false})
        let theater = new Theater(req.params.id, req.body.theater_size, req.body.theater_name)
        await theater.editTheater()
        res.send(`edit size Theater ${req.params.id} to ${req.body.theater_size}`)
    }catch(err){
        console.log(err)
    }
}
