const pool = require('../../sql')

class TICKET_FOOD {
    constructor(TICKET_FOOD_id, food_id, ticket_id, unit) {
        this.TICKET_FOOD_id = TICKET_FOOD_id
        this.food_id = food_id
        this.ticket_id = ticket_id
        this.unit = unit
    }


    async buyFood(){
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try{
            let stmt = 'insert into TICKET_FOOD (food_id, ticket_id, unit) values(?, ?, ?)'
            let keep = await conn.query(stmt, [this.food_id, this.ticket_id, this.unit])
            this.TICKET_FOOD_id = keep[0].insertId
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

module.exports = TICKET_FOOD