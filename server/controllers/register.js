const User = require('../src/model/User')

exports.register = async (req,res,next) => {
    let user = new User(null, req.body.username, req.body.password, req.body.user_fname, req.body.user_lname, req.body.user_tel, req.body.user_email, req.body.type)
    try{
        await user.checkUsername()
        await user.checkEmail()
        await user.register()
        res.send(user)
    }catch(err){
        console.log(err)
    }
}