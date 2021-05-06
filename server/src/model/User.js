const pool = require('../../sql')
const bcrypt = require('bcrypt')

class User {
    constructor(user_id, username, password, user_fname, user_lname, user_tel, user_email, type, user_image, newpassword) {
        this.user_id = user_id
        this.username = username
        this.password = password
        this.user_fname = user_fname
        this.user_lname = user_lname
        this.user_tel = user_tel
        this.user_email = user_email
        this.type = type
        this.user_image = user_image
        this.newpassword = newpassword
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
            console.log(err)
            await conn.rollback();
            return Promise.reject(err)
        } finally {
            console.log("finally");
            conn.release
        }

    }

    async checkUsername() {
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try {
            let stmt = 'select * from USER where username = ?'
            let keep = await conn.query(stmt, [this.username])
            await conn.commit()
            if (keep[0].length > 0) {
                return Promise.reject("Username Duplicate")
            }
            return Promise.resolve()
        } catch (err) {
            console.log(err)
            await conn.rollback();
            return Promise.reject(err)
        } finally {
            conn.release()
        }
    }

    async checkEmail() {
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try {
            let stmt = 'select * from USER where user_email = ?'
            let keep = await conn.query(stmt, [this.user_email])
            await conn.commit()
            if (keep[0].length > 0) {
                return Promise.reject("Email Duplicate")
            }
            return Promise.resolve()
        } catch (err) {
            console.log(err)
            await conn.rollback()
            return Promise.reject(err)
        } finally {
            conn.release()
        }
    }

    async login() {
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try {
            let stmt = 'select password from USER where username = ?'
            let keep = await conn.query(stmt, [this.username])
            let stmt2 = 'select * from USER where username = ?'
            let keep2 = await conn.query(stmt2, [this.username])
            if (keep2[0].length == 0) {
                return Promise.reject("Invalid Username or Password")
            }

            if (!await bcrypt.compare(this.password, keep[0][0].password)) {
                return Promise.reject("Invalid Username or Password")
            }

            await conn.commit()
            let data = keep2[0][0]
            this.user_id = data.user_id
            this.user_fname = data.user_fname
            this.user_lname = data.user_lname
            this.user_tel = data.user_tel
            this.user_email = data.user_email
            this.type = data.type
            return Promise.resolve()
        } catch (err) {
            console.log(err)
            await conn.rollback()
            return Promise.reject(err)
        } finally {
            conn.release()
        }
    }

    async getUserInfo() {
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try {
            let stmt = 'select * from USER where user_id = ?'
            let keep = await conn.query(stmt, [this.user_id])
            await conn.commit()
            return Promise.resolve(keep[0])
        } catch (err) {
            console.log(err)
            await conn.rollback()
            return Promise.reject(err)
        } finally {
            conn.release()
        }
    }

    async addImage() {
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try {
            let stmt = 'UPDATE USER set user_image = ? where user_id = ?'
            await conn.query(stmt, [this.user_image, this.user_id])
            console.log(this.user_image)
            await conn.commit()
            return Promise.resolve()
        } catch (err) {
            console.log(err)
            await conn.rollback()
            return Promise.reject(err)
        } finally {
            conn.release()
        }
    }

    async changePassword() {
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try {
            let stmt2 = 'select password from USER where user_id = ?'
            let keep = await conn.query(stmt2, [this.user_id])
            console.log(keep[0][0])


            if (!await bcrypt.compare(this.password, keep[0][0].password)) {
                return Promise.reject("Invalid password")
            }
            let stmt = 'UPDATE USER set password = ? where user_id = ?'
            await conn.query(stmt, [await bcrypt.hash(this.newpassword, 5), this.user_id])
            await conn.commit()
            return Promise.resolve()
        } catch (err) {
            console.log(err)
            await conn.rollback()
            return Promise.reject(err)
        } finally {
            conn.release()
        }
    }
}

module.exports = User