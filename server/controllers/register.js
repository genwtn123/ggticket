const User = require('../src/model/User')
const Admin = require('../src/model/Admin')
const Customer = require('../src/model/Customer')

exports.registerAdmin = async (req,res,next) => {
    let user = new Admin(null, null, req.body.username, req.body.password, req.body.user_fname, req.body.user_lname, req.body.user_tel, req.body.user_email, req.body.type)
    try{
        await user.checkUsername()
        await user.checkEmail()
        await user.createAdmin()
        res.send(user)
    }catch(err){
        console.log(err)
    }
}

exports.registerCustomer = async (req,res,next) => {
    let user = new Customer(null, null, req.body.username, req.body.password, req.body.user_fname, req.body.user_lname, req.body.user_tel, req.body.user_email, req.body.type)
    try{
        await user.checkUsername()
        await user.checkEmail()
        await user.createCustomer()
        res.send(user)
    }catch(err){
        console.log(err)
    }
}