const History = require('../src/model/History')
const Joi = require('joi')

exports.getHistory = async (req, res, next) => {
    try {
        console.log("ses", req.session.userdata.user_id)
        let history = new History(req.session.userdata.user_id)
        let keep = await history.getHistory()
        res.send(keep)
    } catch (err) {
        res.status(404).send(err)
    }
}
