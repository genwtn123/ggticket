const pool = require('../../sql')


class Advertisement{
    constructor(ad_id, ad_name, ad_detail, ad_image, admin_id){
        this.ad_id = ad_id
        this.ad_name = ad_name
        this.ad_detail = ad_detail
        this.ad_image = ad_image
        this.admin_id = admin_id
    }

    async createAd(){
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try{
            let stmt = 'insert into ADVERTISEMENT (ad_name, ad_detail, ad_image, admin_id) values(?, ?, ?, ?);'
            let keep = await conn.query(stmt, [this.ad_name, this.ad_detail, this.ad_image, this.admin_id])
            this.ad_id = keep[0].insertId
            await conn.commit()
            return Promise.resolve()
        }catch(err){
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
            let stmt = 'update ADVERTISEMENT set ad_name = ?, ad_detail = ?, ad_image = ?, admin_id = ? where ad_id = ?;'
            await conn.query(stmt, [this.ad_name, this.ad_detail, this.ad_image, this.admin_id, this.ad_id])
            await conn.commit()
            return Promise.resolve()
        }catch(err){
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
            await conn.rollback()
            return Promise.reject()
        }finally{
            conn.release()
        }
    }
}

module.exports = Advertisement