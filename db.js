var mysql = require('mysql2');
var db = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'qwer1234',
    database: 'user'
});
db.connect();

module.exports = db;



// var mysql = require('mysql2');
// var db = mysql.createConnection({
//     host    : process.env.DB_URL,
//     port: '3306',
//     user    : process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//     database: process.env.MYSQL_DATABASE
// });
// db.connect();

// module.exports = db;
