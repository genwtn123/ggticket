const pool = require('../../sql')

class Theater{
    constructor(theater_id, price){
        this.theater_id = theater_id
        this.price = price
    }

    async addTheater(){
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try{
            let stmt = 'insert into THEATER (price) values(?);'
            let keep = await conn.query(stmt, [this.price])
            this.theater_id = keep[0].insertId
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

    async delTheater(){
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try{
            let stmt = 'delete from THEATER where theater_id=?;'
            let keep = await conn.query(stmt, [this.theater_id])
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

    async editTheater(){
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try{
            let stmt = 'update THEATER set price=? where theater_id = ?'
            let keep = await conn.query(stmt, [this.price, this.theater_id])
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

module.exports = Theater