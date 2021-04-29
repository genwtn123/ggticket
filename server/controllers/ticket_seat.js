const TICKET_SEAT = require('../src/model/TICKET_SEAT')
const Joi = require('joi')

exports.bookSeat = async (req, res, next) => {
    try {
        console.log(req.body)
        for (let seatz in req.body) {
            console.log(seatz)
            console.log(req.body[seatz].ticket_id, req.body[seatz].seat_no)
            let seat = new TICKET_SEAT(null, req.body[seatz].ticket_id, req.body[seatz].seat_no)
            await seat.bookSeat()
        }
        res.send(req.body)
    } catch (err) {
        console.log(err)
    }
}