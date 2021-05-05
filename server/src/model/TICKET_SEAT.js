const pool = require('../../sql')

class TICKET_SEAT{
    constructor(TICKET_SEAT_id, seat_no, ticket_id){
        this.TICKET_SEAT_id = TICKET_SEAT_id
        this.seat_no = seat_no
        this.ticket_id = ticket_id
    }


    async bookSeat(){
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try{
            let stmt = 'insert into TICKET_SEAT(ticket_id, seat_no) values(?, ?)'
            let keep = await conn.query(stmt,[this.seat_no, this.ticket_id])
            this.TICKET_SEAT_id = keep[0].insertId
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

module.exports = TICKET_SEAT