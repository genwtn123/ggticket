const User = require('./User')
const pool = require('../../sql')

class Admin extends User{
    constructor(admin_id,user_id, username, password, user_fname, user_lname, user_tel, user_email, type){
        super(user_id, username, password, user_fname, user_lname, user_tel, user_email, type)
        this.admin_id = admin_id
    }

    async createAdmin(){
        const conn = await pool.getConnection()
        await conn.beginTransaction();
    }
}

module.exports = Admin