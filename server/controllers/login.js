const User = require('../src/model/User')

exports.login = async (req,res,next) => {
    let user = new User(null, req.body.username, req.body.password)
    try{
        await  user.login()
        res.status(200).send(user)
    }catch(err){
        console.log(err)
    }
}

