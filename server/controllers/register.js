const User = require('../src/model/User')
const Admin = require('../src/model/Admin')
const Customer = require('../src/model/Customer')
const Joi = require('joi')
const bcrypt = require('bcrypt')
const pool = require('../../server/sql')

const passwordValidator = (value, helpers) => {
    if (value.length < 8) {
        throw new Joi.ValidationError('Password must contain at least 8 characters')
    }
    if (!(value.match(/[a-z]/) && value.match(/[A-Z]/) && value.match(/[0-9]/))) {
        throw new Joi.ValidationError('Password must be harder')
    }
    return value
}

const usernameValidator = async (value, helpers) => {
    const [rows, _] = await pool.query("SELECT username FROM USER WHERE username = ?", [value])
    if (rows.length > 0) {
        const message = 'This username is already taken'
        throw new Joi.ValidationError(message, { message })
    }
    return value
}

const regis = Joi.object({
    username : Joi.string().required().min(5).max(20).external(usernameValidator),
    password: Joi.string().required().custom(passwordValidator),
    user_fname : Joi.string().required().max(50),
    user_lname :  Joi.string().required().max(50),
    user_tel : Joi.string().required().pattern(/0[0-9]{9}/),
    user_email : Joi.string().required().email(),
    type : Joi.string().valid('Audience', 'Staff').required()
})
exports.registerAdmin = async (req,res,next) => {
    try{
        await regis.validateAsync(req.body, { abortEarly: false })
        let user = new Admin(null, null, req.body.username, await bcrypt.hash(req.body.password, 5), req.body.user_fname, req.body.user_lname, req.body.user_tel, req.body.user_email, req.body.type)
        await user.checkUsername()
        await user.checkEmail()
        await user.createAdmin()
        res.send(user)
    }catch(err){
        res.status(400).send(err)
    }
}

exports.registerCustomer = async (req,res,next) => {
    try{
        await regis.validateAsync(req.body, { abortEarly: false })
        let user = new Customer(null, null, req.body.username, await bcrypt.hash(req.body.password, 5), req.body.user_fname, req.body.user_lname, req.body.user_tel, req.body.user_email, req.body.type)
        await user.checkUsername()
        await user.checkEmail()
        await user.createCustomer()
        res.send(user)
    }catch(err){
        res.status(400).send(err)
    }
}