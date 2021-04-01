const Ticket = require('../src/model/Ticket')


exports.customerTicket = async (req, res, next) => {
    let ticket = new Ticket(null, req.body.price, req.body.cus_id, null, req.body.movie_id)
    console.log(ticket)
    try{
        await ticket.customerTicket()
        res.send(ticket)
    }catch(err){
        console.log(err)
    }
}