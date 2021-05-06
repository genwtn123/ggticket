const pool = require('../../sql')

class Theater {
    constructor(theater_id, theater_size, theater_name, theater_status) {
        this.theater_id = theater_id,
            this.theater_size = theater_size,
            this.theater_name = theater_name,
            this.theater_status = theater_status
    }

    async getTheater() {
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try {
            let stmt = 'SELECT * FROM THEATER where theater_status = 1 and showtheater = 1 order by (theater_name)'
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

    async getTheater2() {
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try {
            let stmt = 'SELECT * FROM THEATER where showtheater = 1 order by theater_name'
            let stmt2 = 'SELECT DISTINCT theater_id FROM SHOWTIME'
            let stmt3 = 'SELECT * FROM SEAT'
            let keep = await conn.query(stmt)
            let keep2 = await conn.query(stmt2)
            let keep3 = await conn.query(stmt3)
            keep.push(keep2[0])
            keep.push(keep3[0])
            await conn.commit()
            return Promise.resolve(keep)
        } catch (err) {
            console.log(err)
            await conn.rollback()
            return Promise.reject()
        } finally {
            conn.release()
        }
    }


    async addTheater() {
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try {
            console.log(this.theater_size, this.theater_name)
            let stmt = 'insert into THEATER (theater_size, theater_name, theater_status, showtheater) values(?, ?, ?, ?);'
            let keep = await conn.query(stmt, [this.theater_size, this.theater_name, true, true])
            this.theater_id = keep[0].insertId

            let rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

            if (this.theater_size == "L") {
                for (let row = 7; row >= 0; row--) {
                    for (let col = 0; col < 16; col++) {
                        if (rows[row] == 'A' || rows[row] == 'B') {
                            let stmt2 = 'insert into SEAT (seat_name, type_of_seat, seat_price, seat_status, theater_id) \
                                         values(?, ?, ?, ?, ?)'
                            conn.query(stmt2, [rows[row] + ((col + 1).toString()), "honeymoon", 220, true, this.theater_id])
                        } else {
                            let stmt2 = 'insert into SEAT (seat_name, type_of_seat, seat_price, seat_status, theater_id) \
                            values(?, ?, ?, ?, ?)'
                            conn.query(stmt2, [rows[row] + ((col + 1).toString()), "normal", 180, true, this.theater_id])
                        }
                    }
                }
            }

            if (this.theater_size == "M") {
                for (let row = 5; row >= 0; row--) {
                    for (let col = 0; col < 12; col++) {
                        if (rows[row] == 'A' || rows[row] == 'B') {
                            let stmt2 = 'insert into SEAT (seat_name, type_of_seat, seat_price, seat_status, theater_id) \
                                         values(?, ?, ?, ?, ?)'
                            conn.query(stmt2, [rows[row] + ((col + 1).toString()), "honeymoon", 220, true, this.theater_id])
                        } else {
                            let stmt2 = 'insert into SEAT (seat_name, type_of_seat, seat_price, seat_status, theater_id) \
                            values(?, ?, ?, ?, ?)'
                            conn.query(stmt2, [rows[row] + ((col + 1).toString()), "normal", 180, true, this.theater_id])
                        }
                    }
                }
            }

            if (this.theater_size == "S") {
                for (let row = 4; row >= 0; row--) {
                    for (let col = 0; col < 10; col++) {
                        if (rows[row] == 'A' || rows[row] == 'B') {
                            let stmt2 = 'insert into SEAT (seat_name, type_of_seat, seat_price, seat_status, theater_id) \
                                         values(?, ?, ?, ?, ?)'
                            conn.query(stmt2, [rows[row] + ((col + 1).toString()), "honeymoon", 220, true, this.theater_id])
                        } else {
                            let stmt2 = 'insert into SEAT (seat_name, type_of_seat, seat_price, seat_status, theater_id) \
                            values(?, ?, ?, ?, ?)'
                            conn.query(stmt2, [rows[row] + ((col + 1).toString()), "normal", 180, true, this.theater_id])
                        }
                    }
                }
            }
            await conn.commit()
            return Promise.resolve()
        } catch (err) {
            console.log(err)
            await conn.rollback()
            return Promise.reject()
        } finally {
            conn.release()
        }
    }

    async delTheater() {
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try {
            try {
                let stmt2 = 'delete from SEAT where theater_id=?'
                let stmt = 'delete from THEATER where theater_id=?;'
                let keep2 = await conn.query(stmt2, [this.theater_id])
                let keep = await conn.query(stmt, [this.theater_id])
            } catch (err) {
                let stmt3 = 'UPDATE THEATER set showtheater = 0 where theater_id = ?'
                await conn.query(stmt3, [this.theater_id])
            }
            await conn.commit()
            return Promise.resolve()
        } catch (err) {
            console.log(err)
            await conn.rollback()
            return Promise.reject()
        } finally {
            conn.release()
        }
    }

    async editTheater() {
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try {
            let stmt = 'update THEATER set theater_status= ? where theater_id = ?'
            let keep = await conn.query(stmt, [this.theater_status, this.theater_id])
            await conn.commit()
            return Promise.resolve()
        } catch (err) {
            console.log(err)
            await conn.rollback()
            return Promise.reject()
        } finally {
            conn.release()
        }
    }

    async editTheater2() {
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try {
            let stmt = 'update THEATER set theater_status= ?, theater_name= ?, theater_size= ?  where theater_id = ?'
            let keep = await conn.query(stmt, [this.theater_status, this.theater_name, this.theater_size, this.theater_id])

            await conn.commit()
            return Promise.resolve()
        } catch (err) {
            console.log(err)
            await conn.rollback()
            return Promise.reject()
        } finally {
            conn.release()
        }
    }
}

module.exports = Theater