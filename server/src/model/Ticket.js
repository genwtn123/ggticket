const pool = require('../../sql')

class Ticket {
    constructor(ticket_id, ticket_price, audience_id, showtime_no, ticket_datetime, ticket_status, user_id) {
        this.ticket_id = ticket_id
        this.ticket_price = ticket_price
        this.audience_id = audience_id
        this.showtime_no = showtime_no
        this.ticket_datetime = ticket_datetime
        this.ticket_status = ticket_status
        this.user_id = user_id
    }

    async customerTicket() {
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try {
            let stmt = 'insert into TICKET (ticket_price, audience_id, showtime_no, ticket_datetime, ticket_status) values(?, ?, ?, CURRENT_TIMESTAMP, ?);'
            let keep = await conn.query(stmt, [this.ticket_price, this.audience_id, this.showtime_no, this.ticket_status])
            this.ticket_id = keep[0].insertId
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

    async getRecommendMovie() {
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try {
            let stmt = 'select movie_type, count(movie_type) COUNT from MOVIE \
            where movie_id in ( \
            select movie_id \
            from SHOWTIME \
            join TICKET \
            using (showtime_no) \
            where audience_id = ( \
            select audience_id from USER \
            where user_id = ? \
            )) \
            group by(movie_type) \
            order by `COUNT` desc;'
            let keep = await conn.query(stmt, [this.user_id])
            let list = []
            for (let mov of keep[0]) {
                let stmt2 = 'select * from MOVIE where movie_type = ?'
                let keep2 = await conn.query(stmt2, [mov.movie_type])
                if(list.length < 9){
                    list.push(keep2[0])
                }
            }
            console.log(list)
            console.log(keep[0])
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

module.exports = Ticket