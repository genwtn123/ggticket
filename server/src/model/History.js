const pool = require('../../sql')

class History{
    constructor(audience_id){
        this.audience_id = audience_id
    }

    async getHistory(){
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try{
            let stmt = 'select * from TICKET where audience_id = ?'
            let keep = await conn.query(stmt, [this.audience_id])
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