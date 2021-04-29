const Movie = require('../src/model/Movie')
const Joi = require('joi')
const { required } = require('joi')

const validmovie = Joi.object({
    movie_name: Joi.string().required(),
    movie_type: Joi.string().required(),
    movie_length :Joi.number().min(0),
    movie_status: Joi.string().valid("0", "1").required() ,
    movie_releasetime : Joi.date().required(),
    movie_language: Joi.string().required(),
    staff_id : Joi.number().integer().required()
})


exports.addMovie = async (req, res, next) => {
    try{
        await validmovie.validateAsync(req.body, {abortEarly: false})
        let movie = new Movie(null, req.body.movie_name, req.body.movie_type, 0, req.body.movie_length, req.file.path, req.body.movie_status, req.body.staff_id, req.body.movie_releasetime, req.body.movie_language)
        await movie.addMovie()
        res.send(movie)
    }catch(err){
        res.send(err)
    }
}

exports.delMovie = async (req, res, next) => {
    try{
        let movie = new Movie(req.params.id)
        await movie.delMovie()
        res.send(`delete Movie ${req.params.id}`)
    }catch(err){
        console.log(err)
    }
}

exports.editMovie = async (req, res, next) => {
    try{
        await validmovie.validateAsync(req.body, {abortEarly: false})
        let movie = new Movie(req.params.id, req.body.movie_name, req.body.movie_type, null, req.body.movie_length, req.file.path, req.body.movie_status, req.body.staff_id, req.body.movie_releasetime, req.body.movie_language)
        await movie.editMovie()
        res.send(movie)
    }catch(err){
        console.log(err)
    }
}

exports.getMovie = async (req, res, next) => {
    try{
        let movie = new Movie()
        let keep = await movie.getMovie()
        console.log("movie",await movie.getMovie())
        res.send(keep)
    }catch(err){
        console.log(err)
    }
}
