const History = require('../src/model/History')

exports.getHistory = async (req, res, next) => {
    let history = new History(req.body.audience_id)
    console.log(history)
    try {
        let keep = await history.getHistory()
        console.log("history",await history.getHistory())
        res.send(keep)
    } catch (err) {
        res.sendStatus(404)
    }
}
