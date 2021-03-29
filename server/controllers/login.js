const User = require('../src/model/User')

exports.login = async (req, res, next) => {
    let user = new User(null, req.body.username, req.body.password)
    try {
        await user.login()
        req.session.userdata = user
        res.status(200).send(user)
    } catch (err) {
        console.log(err)
    }
}


exports.checkSession = async (req, res, next) => {
    if(req.session.userdata){
        res.send(req.session.userdata)
    }else{
        res.sendStatus(404)
    }
}