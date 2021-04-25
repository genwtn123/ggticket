const Movie = require('../src/model/Movie')


exports.addMovie = async (req, res, next) => {
    let movie = new Movie(null, req.body.movie_name, req.body.movie_type, 0, req.body.movie_length, req.body.movie_image, req.body.movie_status, req.body.staff_id, req.body.movie_releasetime, req.body.movie_language)
    try{
        await movie.addMovie()
        res.send(movie)
    }catch(err){
        console.log(err)
    }
}

exports.delMovie = async (req, res, next) => {
    let movie = new Movie(req.params.id)
    try{
        await movie.delMovie()
        res.send(`delete Movie ${req.params.id}`)
    }catch(err){
        console.log(err)
    }
}

exports.editMovie = async (req, res, next) => {
    let movie = new Movie(req.params.id, req.body.movie_name, req.body.movie_type, null, req.body.movie_length, req.body.movie_image, req.body.movie_status, null, req.body.movie_releasetime, req.body.movie_language)
    try{
        await movie.editMovie()
        res.send(movie)
    }catch(err){
        console.log(err)
    }
}

exports.getMovie = async (req, res, next) => {
    let movie = new Movie()
    try{
        let keep = await movie.getMovie()
        console.log("movie",await movie.getMovie())
        res.send(keep)
    }catch(err){
        console.log(err)
    }
}