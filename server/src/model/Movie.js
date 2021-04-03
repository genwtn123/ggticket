const pool = require('../../sql')

class Movie{
    constructor(movie_id, movie_name, movie_type, viewer, movie_length, movie_image, movie_status){
        this.movie_id = movie_id
        this.movie_name = movie_name
        this.movie_type = movie_type
        this.viewer = viewer
        this.movie_length = movie_length
        this.movie_image = movie_image
        this.movie_status = movie_status
    }

    async addMovie(){
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try{
            let stmt = 'insert into MOVIE (movie_name, movie_type, viewer, movie_length, movie_image, movie_status) values(?, ?, ?, ?, ?, ?);'
            let keep = await conn.query(stmt, [this.movie_name, this.movie_type, this.viewer, this.movie_length, this.movie_image, this.movie_status])
            this.movie_id = keep[0].insertId
            await conn.commit()
            return Promise.resolve()
        }catch(err){
            console.log(err)
            await conn.rollback()
            return Promise.reject()
        }finally{
            conn.release()
        }
    }

    async delMovie(){
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try{
            let stmt = 'delete from TICKET where movie_id = ?'
            await conn.query(stmt, [this.movie_id])
            let stmt2 = 'delete from MOVIE where movie_id = ?'
            await conn.query(stmt2, [this.movie_id])
            await conn.commit()
            return Promise.resolve()
        }catch(err){
            console.log(err)
            await conn.rollback()
            return Promise.reject()
        }finally{
            conn.release
        }
    }

    async editMovie(){
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try{
            let stmt = 'update MOVIE set movie_name = ?, movie_type = ?, movie_length = ?, movie_image = ? movie_status = ? where movie_id = ?;'
            await conn.query(stmt, [this.movie_name, this.movie_type, this.movie_length, this.movie_image, this.movie_status, this.movie_id])
            await conn.commit()
            return Promise.resolve()
        }catch(err){
            await conn.rollback()
            return Promise.reject()
        }finally{
            conn.release()
        }
    }
}

module.exports = Movie