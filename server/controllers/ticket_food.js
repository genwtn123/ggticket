const TICKET_FOOD = require('../src/model/TICKET_FOOD')
const Joi = require('joi')

exports.buyFood = async (req, res, next) => {
    try {
        console.log(req.body)
        for (let foodz in req.body) {
            console.log(foodz)
            console.log(req.body[foodz].ticket_id, req.body[foodz].ticket_id)
            let food = new TICKET_FOOD(null, req.body[foodz].food_id, req.body[foodz].ticket_id, req.body[foodz].unit)
            await food.buyFood()
        }
        res.send(req.body)
    } catch (err) {
        console.log(err)
    }
}