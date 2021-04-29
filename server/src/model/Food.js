const pool = require('../../sql')


class FOOD{
    constructor(food_id, food_name, food_image, food_price, food_status, staff_id){
        this.food_id = food_id
        this.food_name = food_name
        this.food_image = food_image
        this.food_price = food_price
        this.food_status = food_status
        this.staff_id = staff_id
    }

    async getFood(){
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try{
            let stmt = 'select * from FOOD'
            let keep = await conn.query(stmt)
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

    async createFood(){
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try{
            let stmt = 'insert into FOOD(food_name, food_image, food_price, food_status, staff_id) values(?, ?, ?, ?, ?);'
            let keep = await conn.query(stmt, [this.food_name, this.food_image, this.food_price, this.food_status, this.staff_id])
            console.log("Er")
            this.food_id = keep[0].insertId
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

    async editFood(){
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try{
            let stmt = 'update FOOD set food_name = ?, food_image = ?, food_price = ?, staff_id = ? where food_id = ?;'
            await conn.query(stmt, [this.food_name, this.food_image, this.food_price, this.staff_id, this.food_id])
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

    async deleteFood(){
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try{
            let stmt = 'delete from FOOD where food_id = ?'
            await conn.query(stmt, [this.food_id])
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

    async hideFood(){
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try{
            let stmt = 'update FOOD set food_status =? where food_id = ?'
            await conn.query(stmt, [false, this.food_id])
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

module.exports = FOOD