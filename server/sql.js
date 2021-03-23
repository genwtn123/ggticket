var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: '123456',
  database: 'mydatabase'
})

connection.connect((err)=>{
    if(err){
        throw err
    }
})

module.exports = connection