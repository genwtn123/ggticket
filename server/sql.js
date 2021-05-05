// var mysql = require('mysql')
// var connection = mysql.createConnection({
//   host: 'db',
//   user: 'root',
//   password: '123456',
//   database: 'mydatabase'
// })

// connection.connect((err)=>{
//     if(err){
//         throw err
//     }
// })

// module.exports = connection

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'db',
  user: 'root',
  password: '123456',
  database: 'mydatabase',
  waitForConnections: true,
  connectionLimit: 100,
  queueLimit: 0
});

module.exports = pool;