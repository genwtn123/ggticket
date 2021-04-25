const Theater = require('../src/model/Theater')


exports.addTheater = async (req, res, next) => {
    let theater = new Theater(null, req.body.theater_size)
    try{
        await theater.addTheater()
        res.send(theater)
    }catch(err){
        console.log(err)
    }
}

exports.delTheater = async (req, res, next) => {
    let theater = new Theater(req.params.id)
    try{
        await theater.delTheater()
        res.send(`delete Theater ${req.params.id}`)
    }catch(err){
        console.log(err)
    }
}
exports.editTheater = async (req, res, next) => {
    let theater = new Theater(req.params.id, req.body.theater_size)
    try{
        await theater.editTheater()
        res.send(`edit size Theater ${req.params.id} to ${req.body.theater_size}`)
    }catch(err){
        console.log(err)
    }
}
