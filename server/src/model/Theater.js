const pool = require('../../sql')

class Theater{
    constructor(theater_id, theater_size, movie_id){
        this.theater_id = theater_id
        this.theater_size = theater_size,
        this.movie_id = movie_id
    }

    async addTheater(){
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try{
            let stmt = 'insert into THEATER (theater_size) values(?);'
            let keep = await conn.query(stmt, [this.theater_size])
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
            let stmt = 'update THEATER set theater_size=? where theater_id = ?'
            let keep = await conn.query(stmt, [this.theater_size, this.theater_id])
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