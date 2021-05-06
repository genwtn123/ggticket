const pool = require('../../sql')

class Seat{
    constructor(seat_no, type_of_seat, seat_name, seat_status, seat_price, theater_id){
        this.seat_no = seat_no
        this.type_of_seat = type_of_seat
        this.seat_name = seat_name
        this.seat_status = seat_status
        this.seat_price = seat_price
        this.theater_id = theater_id
    }


    async addSeat(){
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try{
            let stmt = 'insert into SEAT (type_of_seat, seat_name, seat_price, seat_status, theater_id) values(?, ?, ?, ?, ?);'
            let keep = await conn.query(stmt, [this.type_of_seat, this.seat_name, this.seat_price, 1, this.theater_id])
            this.seat_id = keep[0].insertId
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

    async editSeat(){
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try{
            let stmt = 'update SEAT set type_of_seat=?, theater_id=?, seat_price =? where seat_no=?'
            let keep = await conn.query(stmt, [this.type_of_seat, this.theater_id, this.seat_price, this.seat_no])
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

    async delSeat(){
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try{
            let stmt = 'delete from SEAT where seat_no=?;'
            let keep = await conn.query(stmt, [this.seat_no])
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

module.exports = Seat