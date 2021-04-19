const pool = require('../../sql')

class User {
    constructor(user_id, username, password, user_fname, user_lname, user_tel, user_email, type) {
        this.user_id = user_id
        this.username = username
        this.password = password
        this.user_fname = user_fname
        this.user_lname = user_lname
        this.user_tel = user_tel
        this.user_email = user_email
        this.type = type
    }

    async register() {
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try {
            let stmt = 'insert into USER (username, password, user_fname, user_lname, user_tel, user_email, type) values(?, ?, ?, ?, ?, ?, ?);'
            let test = await conn.query(stmt, [this.username, this.password, this.user_fname, this.user_lname, this.user_tel, this.user_email, this.type])
            this.user_id = test[0].insertId
            await conn.commit()
            return Promise.resolve()
        } catch (err) {
            await conn.rollback();
            return Promise.reject(err)
        } finally {
            console.log("finally");
            conn.release
        }

    }

    async checkUsername(){
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try{
            let stmt = 'select * from USER where username = ?'
            let keep = await conn.query(stmt, [this.username])
            await conn.commit()
            if(keep[0].length > 0){
                return Promise.reject("Username Duplicate")
            }
            return Promise.resolve()
        }catch(err){
            await conn.rollback();
            return Promise.reject(err)
        }finally{
            conn.release()
        }
    }

    async checkEmail(){
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try{
            let stmt = 'select * from USER where user_email = ?'
            let keep = await conn.query(stmt, [this.user_email])
            await conn.commit()
            if(keep[0].length > 0){
                return Promise.reject("Email Duplicate")
            }
            return Promise.resolve()
        }catch(err){
            await conn.rollback()
            return Promise.reject(err)
        }finally{
            conn.release()
        }
    }

    async login(){
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try{
            let stmt = 'select * from USER where username = ? and password = ?'
            let keep = await conn.query(stmt, [this.username, this.password])
            console.log("asas", keep[0])
            await conn.commit()
            if(keep[0].length == 0){
                return Promise.reject("Invalid Username or Password")
            }
            let data = keep[0][0]
            this.user_id = data.user_id
            this.username = data.username
            this.password = data.password
            this.user_fname = data.user_fname
            this.user_lname = data.user_lname
            this.user_tel = data.user_tel
            this.user_email = data.user_email
            this.type = data.type
            return Promise.resolve()
        }catch(err){
            await conn.rollback()
            return Promise.reject(err)
        }finally{
            conn.release()
        }
    }
}

module.exports = User