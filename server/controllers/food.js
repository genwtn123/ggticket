const Food = require('../src/model/Food')
const Joi = require('joi')

const validfood = Joi.object({
    food_name : Joi.string().required(),
    food_price : Joi.number().required(),
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
    if (req.fileValidationError) {
        res.status(400).send(req.fileValidationError);
        return;
      }
    try{
        await validfood.validateAsync(req.body, {abortEarly: false})

//         console.log(req.body)
//         let food = new Food(null, req.body.food_name, req.file.path, req.body.food_price, true, req.body.staff_id)

        let food = new Food(null, req.body.food_name, req.file.path, req.body.food_price, true, null, req.session.userdata.user_id)

        await food.createFood()
        res.send(food)
    }catch(err){
        console.log(err)
        res.sendStatus(400)
    }
}

exports.editFood = async (req, res, next) => {
    if (req.fileValidationError) {
        res.status(400).send(req.fileValidationError);
        return;
      }
    try{
        await validfood.validateAsync(req.body, {abortEarly: false})
        let food = new Food(req.params.food_id, req.body.food_name, req.file.path, req.body.food_price, null,  null, req.session.userdata.user_id)
        await food.editFood()
        res.send(food)
    }catch(err){
        console.log(err)
        res.sendStatus(400)
    }
}

exports.deleteFood = async (req, res, next) =>{
    if(req.session.userdata.type != "STAFF"){
        res.send("You are not admin")
        return
    }
    let food = new Food(req.params.food_id, null, null, null, null, null, req.session.userdata.user_id)
    try{
        await food.deleteFood()
        res.send("food "+ food.food_id+ " Deleted")
    }catch(err){
        console.log(err)
        res.send(err)
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
