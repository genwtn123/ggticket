const Seat = require('../src/model/Seat')
const Joi = require('joi')

const validseat = Joi.object({
    type_of_seat: Joi.string().valid('honeymoon', 'normal').required(),
    seat_name: Joi.string().required(),
    seat_price: Joi.number().required(),
    theater_id: Joi.number().integer().required()
})

const valideditSeat = Joi.object({
    type_of_seat: Joi.string().valid('honeymoon', 'normal').required(),
    seat_price: Joi.number().required(),
    theater_id: Joi.number().integer().required()
})


exports.addSeat = async (req, res, next) => {
    try {
        await validseat.validateAsync(req.body, { abortEarly: false })
        let seat = new Seat(null, req.body.type_of_seat, req.body.seat_name, null, req.body.seat_price, req.body.theater_id)
        await seat.addSeat()
        res.send(seat)
    } catch (err) {
        console.log(err)
    }
}

exports.delSeat = async (req, res, next) => {
    let seat = new Seat(req.params.id)
    try {
        await seat.delSeat()
        res.send(`delete Seat ${req.params.id}`)
    } catch (err) {
        console.log(err)
    }
}

exports.editSeat = async (req, res, next) => {
    try {
        await valideditSeat.validateAsync(req.body, { abortEarly: false })
        let seat = new Seat(req.params.id, req.body.type_of_seat, null, null, req.body.seat_price, req.body.theater_id)
        await seat.editSeat()
        res.send(seat)
    } catch (err) {
        console.log(err)
    }
}
