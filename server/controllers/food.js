const Food = require('../src/model/Food')
const Joi = require('joi')
const { response } = require('express')

const validfood = Joi.object({
    food_name : Joi.string().required(),
    food_price : Joi.number().required(),
    staff_id : Joi.number().integer().required(),
})

exports.getFood = async (req, res, next) => {
    let food = new Food
    try{
        let keep = await food.getFood()
        res.send(keep)
    }catch(err){
        console.log(err)
    }
}

exports.createFood = async (req, res, next) => {
    try{
        await validfood.validateAsync(req.body, {abortEarly: false})
        console.log(req.body)
        let food = new Food(null, req.body.food_name, req.file.path, req.body.food_price, true, req.body.staff_id)
        await food.createFood()
        res.send(food)
    }catch(err){
        console.log(err)
    }
}

exports.editFood = async (req, res, next) => {
    try{
        await validfood.validateAsync(req.body, {abortEarly: false})
        let food = new Food(req.params.food_id, req.body.food_name, req.file.path, req.body.food_price, null,  req.body.staff_id)
        await food.editFood()
        res.send(food)
    }catch(err){
        console.log(err)
    }
}

exports.deleteFood = async (req, res, next) =>{
    let food = new Food(req.params.food_id)
    try{
        await food.deleteFood()
        res.send("food "+ food.food_id+ " Deleted")
    }catch(err){
        console.log(err)
    }
}

exports.hideFood = async(req, res, next) =>{
    let food = new Food(req.params.food_id, null, null, null, false)
    try{
        await food.hideFood()
        res.send(food)
    }catch(err){
        console.log(err)
        res.send(err)
    }
}
