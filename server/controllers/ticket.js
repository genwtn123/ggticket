const Ticket = require('../src/model/Ticket')


exports.customerTicket = async (req, res, next) => {
    let ticket = new Ticket(null, req.body.ticket_price, req.body.audience_id, req.body.showtime_no)
    console.log(ticket)
    try{
        await ticket.customerTicket()
        res.send(ticket)
    }catch(err){
        console.log(err)
    }
}