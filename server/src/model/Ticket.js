const pool = require('../../sql')

class Ticket {
    constructor(ticket_id, ticket_price, audience_id, showtime_no, ticket_datetime, ticket_status, user_id, seat_no, food) {
        this.ticket_id = ticket_id
        this.ticket_price = ticket_price
        this.audience_id = audience_id
        this.showtime_no = showtime_no
        this.ticket_datetime = ticket_datetime
        this.ticket_status = ticket_status
        this.user_id = user_id
        this.seat_no = seat_no
        this.food = food
    }

    async customerTicket() {
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try {

            let stmt11 = 'select audience_id from AUDIENCE where user_id = ?;'
            let audience_id = await conn.query(stmt11, [this.user_id])
            console.log(audience_id[0][0].audience_id)

            let stmt = 'insert into TICKET (audience_id, showtime_no, ticket_datetime, ticket_status) values(?, ?, CURRENT_TIMESTAMP, ?);'
            let keep = await conn.query(stmt, [audience_id[0][0].audience_id, this.showtime_no, this.ticket_status])
            this.ticket_id = keep[0].insertId

            for (let seat of this.seat_no) {
                let stmt2 = 'insert into TICKET_SEAT(ticket_id, seat_no) values(?, ?);'
                let keep2 = await conn.query(stmt2, [this.ticket_id, seat])
            }
            for (let food of this.food) {
                let stmt3 = 'insert into TICKET_FOOD (ticket_id, food_id, unit) values(?, ?, ?);'
                let keep3 = await conn.query(stmt3, [this.ticket_id, food.food_id, food.amount])
            }

            let stmt4 = 'select ticket_id, SUM(seat_price) seat_price from TICKET_SEAT \
            join SEAT \
            using(seat_no) \
            where ticket_id = ? \
            group by (ticket_id);'
            let seat_price = await conn.query(stmt4, [this.ticket_id])

            let stmt5 = 'select ticket_id, SUM(food_price) food_price from TICKET_FOOD \
            join FOOD \
            using(food_id) \
            where ticket_id = ? \
            group by (ticket_id);'
            let food_price = await conn.query(stmt5, [this.ticket_id])
            console.log(food_price[0], seat_price[0])

            let stmt6 = 'update TICKET set ticket_price = ? where ticket_id = ?;'

            if (this.food_price == undefined) {
                await conn.query(stmt6, [seat_price[0][0].seat_price, this.ticket_id])
            } else {
                await conn.query(stmt6, [food_price[0][0].food_price + seat_price[0][0].seat_price, this.ticket_id])
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
            select audience_id from AUDIENCE \
            where user_id = ? \
            )) \
            group by(movie_type) \
            order by `COUNT` desc;'
            let keep = await conn.query(stmt, [this.user_id])
            let list = []
            if (keep[0].length != 0) {
                for (let mov of keep[0]) {
                    let stmt2 = 'select * from MOVIE where movie_type = ? and movie_status <> 0'
                    let keep2 = await conn.query(stmt2, [mov.movie_type])
                    if (list.length < 9) {
                        list.push(keep2[0])
                    }
                }
            }else{
                let stmtmov = 'select * from MOVIE where movie_status <> 0'
                let keepmovie = await conn.query(stmtmov)
                for(let mov of keepmovie[0]){
                    if (list.length < 9) {
                        list.push(mov)
                    }
                }
            }
            console.log(list)
            console.log(keep[0])
            await conn.commit()
            return Promise.resolve(list)
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