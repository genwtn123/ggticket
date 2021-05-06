const pool = require('../../sql')

class Showtime {
    constructor(showtime_no, time_start, time_finish, showtime_status, movie_id, staff_id, theater_id) {
        this.showtime_no = showtime_no
        this.time_start = time_start
        this.time_finish = time_finish
        this.showtime_status = showtime_status
        this.movie_id = movie_id
        this.staff_id = staff_id
        this.theater_id = theater_id
    }

    async addShowtime() {
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try {
            let stmt = 'insert into SHOWTIME (time_start, time_finish, showtime_status, movie_id, staff_id, theater_id) values(?, ?, ?, ?, ?, ?);'
            let keep = await conn.query(stmt, [this.time_start, this.time_finish, this.showtime_status, this.movie_id, this.staff_id, this.theater_id])
            this.showtime_no = keep[0].insertId
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

    async editShowtime() {
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try {
            let stmt = 'UPDATE SHOWTIME set time_start=?, time_finish=?, movie_id=?, staff_id=? where showtime_no =?'
            let keep = await conn.query(stmt, [this.time_start, this.time_finish, this.movie_id, this.staff_id, this.showtime_no])
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

    async delShowtime() {
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try {
            try {
                let stmt = 'delete from SHOWTIME where showtime_no=?;'
                let keep = await conn.query(stmt, [this.showtime_no])
            }catch(err){
                let stmt2 = 'UPDATE SHOWTIME set showtime_status = 0 where showtime_no = ?'
                let keep2 = await conn.query(stmt2, [this.showtime_no])
            }
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

    async getShowtime() {
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try {
            let stmt = 'select * from SHOWTIME \
            join MOVIE \
            using (movie_id) \
            join THEATER \
            using(theater_id) \
            where  time_start > CURDATE() and showtime_status = 1 and showtheater = 1\
            order by theater_name, (time_start)'
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

    async getShowtime2() {
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try {
            let stmt = 'select * from SHOWTIME \
            join MOVIE \
            using (movie_id) \
            join THEATER \
            using(theater_id) \
            where  time_start > CURDATE() and showtime_status = 1 and showtheater = 1\
            order by theater_name, (time_start) '

            let stmt2 = 'select * from MOVIE \
            order by (movie_name)'

            let stmt3 = 'select * from THEATER \
            where theater_status = 1\
            order by (theater_name)'

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

    async getseatinShowtime() {
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try {
            let stmt = 'select * from TICKET \
            join TICKET_SEAT \
            using(ticket_id) \
            join SHOWTIME \
            using(showtime_no) \
            where showtime_no = ?'
            let keep = await conn.query(stmt, this.showtime_no)

            let stmt2 = 'select * from SEAT \
            join THEATER \
            using(theater_id) \
            where theater_id = ? \
            order by seat_no'
            let keep2 = await conn.query(stmt2, this.theater_id)

            for (let seat of keep2[0]) {
                for (let used of keep[0]) {
                    if (seat.seat_no === used.seat_no) {
                        seat.seat_status = 0
                    }
                }
            }

            await conn.commit()
            return Promise.resolve(keep2[0])
        } catch (err) {
            console.log(err)
            await conn.rollback()
            return Promise.reject()
        } finally {
            conn.release()
        }
    }
}

module.exports = Showtime