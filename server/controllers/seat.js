const Seat = require('../src/model/Seat')


exports.addSeat = async (req, res, next) => {
    let seat= new Seat(null, req.body.type_of_seat, req.body.seat_status, req.body.theater_id)
    try{
        await seat.addSeat()
        res.send(seat)
    }catch(err){
        console.log(err)
    }
}

exports.delSeat = async (req, res, next) => {
    let seat = new Seat(req.params.id)
    try{
        await seat.delSeat()
        res.send(`delete Seat ${req.params.id}`)
    }catch(err){
        console.log(err)
    }
}

exports.editSeat = async (req, res, next) => {
    let seat = new Seat(req.params.id, req.body.type_of_seat, req.body.seat_status, req.body.theater_id)
    try{
        await seat.editSeat()
        res.send(seat)
    }catch(err){
        console.log(err)
    }
}