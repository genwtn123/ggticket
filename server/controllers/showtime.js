const Showtime = require('../src/model/Showtime')


exports.addShowtime = async (req, res, next) => {
    let showtime= new Showtime(null, req.body.time_start, req.body.time_finish, req.body.movie_id, req.body.staff_id)
    try{
        await showtime.addShowtime()
        res.send(showtime)
    }catch(err){
        console.log(err)
    }
}

exports.delShowtime = async (req, res, next) => {
    let showtime = new Showtime(req.params.id)
    try{
        await showtime.delShowtime()
        res.send(`delete Showtime ${req.params.id}`)
    }catch(err){
        console.log(err)
    }
}

exports.editShowtime = async (req, res, next) => {
    let showtime = new Showtime(req.params.id, req.body.time_start, req.body.time_finish, req.body.movie_id, req.body.staff_id)
    try{
        await showtime.editShowtime()
        res.send(showtime)
    }catch(err){
        console.log(err)
    }
}