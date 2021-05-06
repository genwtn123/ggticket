const { response } = require('express')
const pool = require('../../sql')


class Advertisement{
    constructor(ad_id, ad_name, ad_detail, ad_image, staff_id, user_id){
        this.ad_id = ad_id
        this.ad_name = ad_name
        this.ad_detail = ad_detail
        this.ad_image = ad_image
        this.staff_id = staff_id
        this.user_id = user_id
    }

    async getAd(){
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try{
            let stmt = 'select * from ADVERTISEMENT'
            let keep = await conn.query(stmt)
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

    async createAd(){
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try{
            let stmt2  = 'select staff_id from USER \
            join THEATER_STAFF \
            using(user_id) \
            where user_id = ?'
            let staff = await conn.query(stmt2, [this.user_id])
            this.staff_id = staff[0][0].staff_id

            let stmt = 'insert into ADVERTISEMENT (ad_name, ad_detail, ad_image, staff_id) values(?, ?, ?, ?);'
            let keep = await conn.query(stmt, [this.ad_name, this.ad_detail, this.ad_image, this.staff_id])
            this.ad_id = keep[0].insertId
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

    async editAd(){
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try{
            let stmt2  = 'select staff_id from USER \
            join THEATER_STAFF \
            using(user_id) \
            where user_id = ?'
            let staff = await conn.query(stmt2, [this.user_id])
            console.log(this.user_id)
            this.staff_id = staff[0][0].staff_id

            let stmt = 'update ADVERTISEMENT set ad_name = ?, ad_detail = ?, ad_image = ?, staff_id = ? where ad_id = ?;'
            await conn.query(stmt, [this.ad_name, this.ad_detail, this.ad_image, this.staff_id, this.ad_id])
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

    async deleteAd(){
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try{
            let stmt = 'delete from ADVERTISEMENT where ad_id = ?'
            await conn.query(stmt, [this.ad_id])
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

module.exports = Advertisement