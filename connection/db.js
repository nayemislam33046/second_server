const mysql = require("mysql2")
require("dotenv").config()
const db = mysql.createConnection({
    user:process.env.USER_DB,
    host:process.env.HOSTDB,
    password:process.env.PASSWORDDB,
    database:process.env.DATABASE
})
module.exports = db