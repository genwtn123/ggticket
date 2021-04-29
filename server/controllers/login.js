const User = require('../src/model/User')
const Joi = require('joi')


const loginSchema = Joi.object({
    username : Joi.required(),
    password : Joi.required()
})

exports.login = async (req, res, next) => {
    try {
        await loginSchema.validateAsync(req.body, { abortEarly: false })
        let user = new User(null, req.body.username, req.body.password)
        await user.login()
        req.session.userdata = user
        console.log("session", req.session)
        res.status(200).send(user)
    } catch (err) {
        res.send(err)
    }
}


exports.checkSession = async (req, res, next) => {
    if(req.session.userdata){
        res.send(req.session.userdata)
    }else{
        res.sendStatus(404)
    }
}

exports.logout = function (req, res) {
    var store = req.sessionStore;
    if (store.sessions) {
        for (var sid in store.sessions) {
            store.destroy(sid, function () {
                res.send("Logout");
            });
        }
    }
}