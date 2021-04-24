const pool = require('../../sql')

class Ticket{
    constructor(ticket_id, price, cus_id, movie_id){
        this.ticket_id = ticket_id
        this.price = price
        this.cus_id = cus_id
        this.movie_id = movie_id
    }

    async customerTicket(){
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try{
            let stmt = 'insert into TICKET (price, cus_id, movie_id) values(?, ?, ?);'
            let keep = await conn.query(stmt, [this.price, this.cus_id, this.movie_id])
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