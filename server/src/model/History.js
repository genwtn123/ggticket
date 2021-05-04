const pool = require('../../sql')

class History {
    constructor(user_id, audience_id) {
        this.user_id = user_id
        this.audience_id = audience_id
    }

    async getHistory() {
        console.log("Get")
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try {
            let send = []

            let stmt2 = 'select audience_id from AUDIENCE where user_id = ?'
            let audience_id = await conn.query(stmt2, [this.user_id])

            let stmt = 'select ticket_id, movie_name, time_start, time_finish, theater_name, movie_language, movie_image from TICKET \
            join SHOWTIME \
            using(showtime_no) \
            join THEATER \
            using(theater_id) \
            join MOVIE \
            using(movie_id) \
            where audience_id = ? \
            order by ticket_id desc'
            let ticket = await conn.query(stmt, [audience_id[0][0].audience_id])

            for (let tic of ticket[0]) {
                let stmt3 = 'select seat_name, seat_price from SEAT \
                join TICKET_SEAT \
                using(seat_no) \
                where ticket_id = ?'
                let seat = await conn.query(stmt3, [tic.ticket_id])
                let stmt4 = 'select food_id, food_name, food_price, unit from FOOD \
                join TICKET_FOOD \
                using(food_id) \
                where ticket_id = ?'
                let food = await conn.query(stmt4, [tic.ticket_id])
                let keepfood = []
                let keepseat = []
                let foodprice = 0
                let seatprice = 0
                for(let foodz of food[0]){
                    keepfood.push(JSON.parse(JSON.stringify(foodz)))
                    foodprice += foodz.food_price*foodz.unit
                }
                for(let seatz of seat[0]){
                    keepseat.push(JSON.parse(JSON.stringify(seatz)))
                    seatprice += seatz.seat_price
                }
                send.push({'ticket':JSON.parse(JSON.stringify(tic)), 'seat':keepseat, 'food':keepfood, 'foodprice':foodprice, 'seatprice':seatprice})
            }

            // let stmt3 = 'select ticket_id, movie_name, time_start, time_finish, theater_name, movie_language, seat_name, movie_image, seat_price, food_id, food_name, food_price, unit from TICKET \
            // join SHOWTIME \
            // using(showtime_no) \
            // join THEATER \
            // using(theater_id) \
            // join TICKET_SEAT \
            // using(ticket_id) \
            // join SEAT \
            // using (seat_no) \
            // join MOVIE \
            // using (movie_id) \
            // left outer join TICKET_FOOD \
            // using (ticket_id) \
            // left outer join FOOD \
            // using (food_id) \
            // where audience_id = ? \
            // order by (ticket_id) DESC;'
            // let kept = await conn.query(stmt3)
            // console.log(kept[0])


            // let stmt = 'select * from TICKET where audience_id = ?'
            // let keep = await conn.query(stmt3, [audience_id[0][0].audience_id])
            await conn.commit()
            return Promise.resolve(send)
        } catch (err) {
            console.log(err)
            await conn.rollback()
            return Promise.reject()
        } finally {
            conn.release()
        }
    }
}

module.exports = History