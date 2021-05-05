const Movie = require('../src/model/Movie')
const Joi = require('joi')
const { required } = require('joi')

const validmovie = Joi.object({
    movie_name: Joi.string().required(),
    movie_type: Joi.string().required(),
    movie_length :Joi.number().min(60),
    movie_status: Joi.string().valid("0", "1").required() ,
    movie_releasetime : Joi.date().required(),
    movie_language: Joi.string().required(),
})


exports.addMovie = async (req, res, next) => {
    try{
        await validmovie.validateAsync(req.body, {abortEarly: false})
        let movie = new Movie(null, req.body.movie_name, req.body.movie_type, 0, req.body.movie_length, req.file.path, req.body.movie_status, null, req.body.movie_releasetime, req.body.movie_language, req.session.userdata.user_id)
        await movie.addMovie()
        res.send(movie)
    }catch(err){
        res.send(err)
    }
}

exports.delMovie = async (req, res, next) => {
    try{
        if(req.session.userdata.type != "STAFF"){
            res.send("You are not admin")
            return
        }
        let movie = new Movie(req.params.id, null, null, null, null, null, null, null, null, null, req.session.userdata.user_id)
        await movie.delMovie()
        res.send(`delete Movie ${req.params.id}`)
    }catch(err){
        console.log(err)
        res.send(err)
    }
}

exports.editMovie = async (req, res, next) => {
    try{
        await validmovie.validateAsync(req.body, {abortEarly: false})
        let movie = new Movie(req.params.id, req.body.movie_name, req.body.movie_type, null, req.body.movie_length, req.file.path, req.body.movie_status, null, req.body.movie_releasetime, req.body.movie_language, req.session.userdata.user_id)
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
