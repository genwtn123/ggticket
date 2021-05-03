const pool = require('../../sql')

class Theater{
    constructor(theater_id, theater_size, theater_name){
        this.theater_id = theater_id,
        this.theater_size = theater_size,
        this.theater_name = theater_name
    }

    async getTheater() {
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try {
            let stmt = 'SELECT * FROM THEATER'
            let keep = await conn.query(stmt)
            console.log(keep[0])
            await conn.commit()
            return Promise.resolve(keep[0])
        } catch (err) {
            console.log(err)
            await conn.rollback()
            return Promise.reject()
        } finally {
            conn.release()
        }
    }


    async addTheater(){
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try{
            console.log(this.theater_size, this.theater_name)
            let stmt = 'insert into THEATER (theater_size, theater_name) values(?, ?);'
            let keep = await conn.query(stmt, [this.theater_size, this.theater_name])
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
            let stmt = 'update THEATER set theater_size=?, theater_name=? where theater_id = ?'
            let keep = await conn.query(stmt, [this.theater_size, this.theater_name, this.theater_id])
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