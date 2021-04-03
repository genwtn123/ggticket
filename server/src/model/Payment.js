const pool = require('../../sql')

class Payment{
    constructor(pay_id, total, pay_datetime, pay_status, ticket_id){
        this.pay_id = pay_id
        this.total = total
        this.pay_datetime = pay_datetime
        this.pay_status = pay_status
        this.ticket_id = ticket_id
    }

    async addPayment(){
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try{
            let stmt = 'insert into PAYMENT (total, pay_datetime, pay_status, ticket_id) values(?, ?, ?, ?);'
            let keep = await conn.query(stmt, [this.total, this.pay_datetime, this.pay_status, this.ticket_id])
            this.pay_id = keep[0].insertId
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

module.exports = Payment