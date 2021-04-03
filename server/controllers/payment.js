const Payment = require('../src/model/Payment')


exports.addPayment = async (req, res, next) => {
    let payment = new Payment(null, req.body.total, req.body.pay_datetime, req.body.pay_status, req.body.ticket_id)
    try{
        await payment.addPayment()
        res.send(payment)
    }catch(err){
        console.log(err)
    }
}
