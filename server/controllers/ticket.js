const Ticket = require('../src/model/Ticket')
const Joi = require('joi')

const validticket = Joi.object({
    ticket_price : Joi.number().required(),
    audience_id: Joi.number().integer().required(),
    showtime_no: Joi.number().integer().required(),
    ticket_status: Joi.boolean().required()
})


exports.customerTicket = async (req, res, next) => {
    try{
        validticket.validateAsync(req.body, {abortEarly:false})
        let ticket = new Ticket(null, req.body.ticket_price, req.body.audience_id, req.body.showtime_no, null, true)
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