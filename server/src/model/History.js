const pool = require('../../sql')

class History{
    constructor(user_id, audience_id){
        this.user_id = user_id
        this.audience_id = audience_id
    }

    async getHistory(){
        console.log("Get")
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try{
            let stmt3 = 'select ticket_id, movie_name, time_start, time_finish, theater_name, movie_language, seat_name, movie_image, seat_price, food_id, food_name, food_price, unit from TICKET \
            join SHOWTIME \
            using(showtime_no) \
            join THEATER \
            using(theater_id) \
            join TICKET_SEAT \
            using(ticket_id) \
            join SEAT \
            using (seat_no) \
            join MOVIE \
            using (movie_id) \
            left outer join TICKET_FOOD \
            using (ticket_id) \
            left outer join FOOD \
            using (food_id) \
            where audience_id = ? \
            order by (ticket_id) DESC;'
            // let kept = await conn.query(stmt3)
            // console.log(kept[0])

            let stmt2 = 'select audience_id from AUDIENCE where user_id = ?'
            let audience_id = await conn.query(stmt2, [this.user_id])

            // let stmt = 'select * from TICKET where audience_id = ?'
            let keep = await conn.query(stmt3, [audience_id[0][0].audience_id])
            console.log(keep[0])
            await conn.commit()
            return Promise.resolve(keep[0])
        }catch(err){
            console.log(err)
            await conn.rollback()
            return Promise.reject()
        }finally{
            conn.release()
        }
    }
}

module.exports = History