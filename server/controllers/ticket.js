const Ticket = require('../src/model/Ticket')
const Joi = require('joi')

const validticket = Joi.object({
    audience_id: Joi.number().integer().required(),
    showtime_no: Joi.number().integer().required(),
    seat_no: Joi.required(),
    food_id: Joi.required()
})


exports.customerTicket = async (req, res, next) => {
    try {
        // validticket.validateAsync(req.body, {abortEarly:false})
        let realfood = []
        console.log(req.body, "body")
        try {
            for (let food of req.body.food) {
                console.log(food)
                foodz = JSON.parse(food)
                console.log(foodz)
                realfood.push(foodz)
            }
        } catch (err) {
            if (req.body.food) {
                realfood.push(JSON.parse(req.body.food))
            }
        }
        let ticket = new Ticket(null, null, null, req.body.showtime_no, null, true, req.session.userdata.user_id, req.body.seat_no, realfood)
        console.log(ticket)
        await ticket.customerTicket()
        res.send(ticket)
    } catch (err) {
        console.log(err)
    }
}

exports.getRecommendMovie = async (req, res, next) => {
    try {
        let ticket = new Ticket(null, null, null, null, null, null, req.session.userdata.user_id)
        let keep = await ticket.getRecommendMovie()
        res.send(keep)
    } catch (err) {
        console.log(err)
    }
}