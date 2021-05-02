const Ticket = require('../src/model/Ticket')
const Joi = require('joi')

const validticket = Joi.object({
    audience_id: Joi.number().integer().required(),
    showtime_no: Joi.number().integer().required(),
    seat_no : Joi.required(),
    food_id : Joi.required()
})


exports.customerTicket = async (req, res, next) => {
    try{
        // validticket.validateAsync(req.body, {abortEarly:false})
        let ticket = new Ticket(null, null, null, req.body.showtime_no, null, true, req.session.userdata.user_id, req.body.seat_no, req.body.food)
        console.log(ticket)
        await ticket.customerTicket()
        res.send(ticket)
    }catch(err){
        console.log(err)
    }
}

exports.getRecommendMovie = async (req, res, next) => {
    try{
        let ticket = new Ticket(null, null,null, null, null, null, req.session.userdata.user_id)
        let keep = await ticket.getRecommendMovie()
        res.send(keep)
    }catch(err){
        console.log(err)
    }
}