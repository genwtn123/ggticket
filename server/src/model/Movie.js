const pool = require('../../sql')

class Movie {
    constructor(movie_id, movie_name, movie_type, viewer, movie_length, movie_image, movie_status, staff_id, movie_releasetime, movie_language) {
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
    }

    async addMovie() {
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try {
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
            let sel = 'select showtime_no from SHOWTIME where movie_id = ?;'
            let showtime = await conn.query(sel, [this.movie_id])
            console.log("s", showtime[0])
            // let sel2 = 'select  ticket_id from TICKET where showtime_no = ?;'
            // let ticket = await conn.query(sel2, [showtime[0][0].showtime_no])

            // let sel3 = 'delete from PAYMENT where ticket_id in ?'
            // await conn.query(sel3, [ticket[0][0].ticket_id])

            if (showtime[0].length > 0) {
                for (let k of showtime[0]) {
                    console.log("show", k.showtime_no)
                    let sel2 = 'select  ticket_id from TICKET where showtime_no = ?;'
                    let ticket = await conn.query(sel2, [k.showtime_no])
                    console.log("t", ticket[0])
                    if (ticket[0].length > 0) {
                        let sel3 = 'delete from PAYMENT where ticket_id = ?;'
                        await conn.query(sel3, [ticket[0][0].ticket_id])
                        let smt = 'delete from TICKET where showtime_no = ?;'
                        await conn.query(smt, [k.showtime_no])
                    }
                }

            }
            // let stmt3 = 'update THEATER set movie_id = ? where movie_id = ?'
            // await conn.query(stmt3, [null, this.movie_id])
            console.log("3")
            let stmt = 'delete from SHOWTIME where movie_id = ?;'
            await conn.query(stmt, [this.movie_id])
            console.log("2")
            let stmt2 = 'delete from MOVIE where movie_id = ?;'
            await conn.query(stmt2, [this.movie_id])

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
            let stmt = 'SELECT * FROM MOVIE where movie_status <> 0'
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