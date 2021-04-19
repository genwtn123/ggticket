const User = require('../src/model/User')

exports.login = async (req, res, next) => {
    let user = new User(null, req.body.username, req.body.password)
    console.log(user)
    try {
        await user.login()
        console.log("ses", req.session)
        req.session.userdata = user
        console.log("ses2", req.session)
        res.status(200).send(user)
    } catch (err) {
        res.sendStatus(404)
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