const Movie = require('../src/model/Movie')


exports.addMovie = async (req, res, next) => {
    let movie = new Movie(null, req.body.movie_name, req.body.movie_type, 0, req.body.movie_length, req.body.movie_image)
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
        res.send(movie)
    }catch(err){
        console.log(err)
    }
}

exports.editMovie = async (req, res, next) => {
    let movie = new Movie(req.params.id, req.body.movie_name, req.body.movie_type, null, req.body.movie_length, req.body.movie_image)
    try{
        await movie.editMovie()
        res.send(movie)
    }catch(err){
        console.log(err)
    }
}