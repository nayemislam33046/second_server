const mysql = require("mysql2");
require("dotenv").config()
const urlDB = `mysql://${process.env.USER}:${process.env.PASSWORD_DB}@${process.env.HOST}:3306/${process.env.DATABASE}`
const db = mysql.createConnection(urlDB);
module.exports = db;