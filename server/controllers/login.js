const User = require('../src/model/User')
const Joi = require('joi')

const loginSchema = Joi.object({
    username : Joi.string().required(),
    password : Joi.string().required()
})

exports.login = async (req, res, next) => {
    try {
        await loginSchema.validateAsync(req.body, { abortEarly: false })
        let user = new User(null, req.body.username, req.body.password)
        await user.login()
        req.session.userdata = user
        res.status(200).send("Login success")
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
            });
        }
        res.send("Logout");
    }
}

exports.getUserInfo = async (req, res, next) => {
    try{
    let user = new User(req.session.userdata.user_id)
    let keep = await user.getUserInfo()
    res.send(keep)
    }catch(err){
        console.log(err)
        res.send(err)
    }
}

exports.addimage = async (req, res, next) => {
    if (req.fileValidationError) {
        res.status(400).send(req.fileValidationError);
        return;
      }
    try{
        let user = new User(req.session.userdata.user_id, null, null, null, null, null, null, null, req.file.path)
        console.log("file", req.file.path)
        await user.addImage()
        res.send("ez")
    }catch(err){
        console.log(err)
        res.send(err)
    }   
}

exports.changePassword = async (req, res, next) => {
    try{
        let user = new User(req.session.userdata.user_id, null, req.body.password, null, null, null, null, null, null, req.body.newpassword)
        console.log(user, "user")
        await user.changePassword()
        res.send("Change password success!")
    }catch(err){
        console.log(err)
        res.send(err)
    }
}