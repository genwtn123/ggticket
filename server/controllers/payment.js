const Payment = require('../src/model/Payment')
const Joi = require('joi')

const validpayment = Joi.object({
    total: Joi.number().required(),
    pay_status: Joi.boolean().required(),
    ticket_id: Joi.number().integer().required()
})


exports.addPayment = async (req, res, next) => {
    try{
        await validpayment.validateAsync(req.body, { abortEarly: false })
        let payment = new Payment(null, req.body.total, null, req.body.pay_status, req.body.ticket_id)
        await payment.addPayment()
        res.send(payment)
    }catch(err){
        console.log(err)
    }
}
