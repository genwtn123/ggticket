const pool = require('../../sql')

class Movie {
    constructor(movie_id, movie_name, movie_type, viewer, movie_length, movie_image, movie_status, staff_id, movie_releasetime, movie_language, user_id) {
        this.movie_id = movie_id
        this.movie_name = movie_name
        this.movie_type = movie_type
        this.viewer = viewer
        this.movie_length = movie_length
        this.movie_image = movie_image
        this.movie_status = movie_status
        this.staff_id = staff_id
        this.movie_releasetime = movie_releasetime
        this.movie_language = movie_language
        this.user_id = user_id
    }

    async addMovie() {
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try {
            let stmt2  = 'select staff_id from USER \
            join THEATER_STAFF \
            using(user_id) \
            where user_id = ?'
            let staff = await conn.query(stmt2, [this.user_id])
            console.log(this.user_id)
            console.log(staff)
            if(!staff[0].length){
                return Promise.reject("You are not admin")
            }
            this.staff_id = staff[0][0].staff_id

            let stmt = 'insert into MOVIE (movie_name, movie_type, viewer, movie_length, movie_image, movie_status, staff_id, movie_releasetime, movie_language) values(?, ?, ?, ?, ?, ?, ?, ?, ?);'
            let keep = await conn.query(stmt, [this.movie_name, this.movie_type, this.viewer, this.movie_length, this.movie_image, this.movie_status, this.staff_id, this.movie_releasetime, this.movie_language])
            this.movie_id = keep[0].insertId
            await conn.commit()
            return Promise.resolve()
        } catch (err) {
            console.log(err)
            await conn.rollback()
            return Promise.reject()
        } finally {
            conn.release()
        }
    }

    async delMovie() {
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try {

            // let stmt3 = 'update THEATER set movie_id = ? where movie_id = ?'
            // await conn.query(stmt3, [null, this.movie_id])
            try{
            let stmt = 'delete from SHOWTIME where movie_id = ?;'
            await conn.query(stmt, [this.movie_id])
            let stmt2 = 'delete from MOVIE where movie_id = ?;'
            await conn.query(stmt2, [this.movie_id])
            }catch(err){
                let stmt3 = 'UPDATE MOVIE set movie_status = 0 where movie_id = ?'
            await conn.query(stmt3, [this.movie_id])
            }

            await conn.commit()
            return Promise.resolve()
        } catch (err) {
            console.log(err)
            await conn.rollback()
            return Promise.reject()
        } finally {
            conn.release
        }
    }

    async editMovie() {
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try {
            let stmt2  = 'select staff_id from USER \
            join THEATER_STAFF \
            using(user_id) \
            where user_id = ?'
            let staff = await conn.query(stmt2, [this.user_id])
            console.log(this.user_id)
            this.staff_id = staff[0][0].staff_id

            let stmt = 'update MOVIE set movie_name = ?, movie_type = ?, movie_length = ?, movie_image = ?, movie_status = ?, staff_id= ?, movie_releasetime = ?, movie_language = ? where movie_id = ?;'
            console.log(conn.query(stmt, [this.movie_name, this.movie_type, this.movie_length, this.movie_image, this.movie_status, this.staff_id, this.movie_releasetime, this.movie_language, this.movie_id]))
            await conn.query(stmt, [this.movie_name, this.movie_type, this.movie_length, this.movie_image, this.movie_status, this.staff_id, this.movie_releasetime, this.movie_language, this.movie_id])
            await conn.commit()
            return Promise.resolve()
        } catch (err) {
            console.log(err)
            await conn.rollback()
            return Promise.reject()
        } finally {
            conn.release()
        }
    }

    async getMovie() {
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try {
            let stmt = 'SELECT * FROM MOVIE where movie_status <> 0 order by movie_releasetime'
            let keep = await conn.query(stmt)
            await conn.commit()
            return Promise.resolve(keep[0])
        } catch (err) {
            console.log(err)
            await conn.rollback()
            return Promise.reject()
        } finally {
            conn.release()
        }
    }

}

module.exports = Movie