const pool = require('../../sql')

class Ticket{
    constructor(ticket_id, ticket_price, audience_id, showtime_no, ticket_datetime){
        this.ticket_id = ticket_id
        this.ticket_price = ticket_price
        this.audience_id = audience_id
        this.showtime_no = showtime_no
        this.ticket_datetime = ticket_datetime
    }

    async customerTicket(){
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try{
            let stmt = 'insert into TICKET (ticket_price, audience_id, showtime_no, ticket_datetime) values(?, ?, ?, CURRENT_TIMESTAMP);'
            let keep = await conn.query(stmt, [this.ticket_price, this.audience_id, this.showtime_no])
            this.ticket_id = keep[0].insertId
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
}

module.exports = Ticket