const db = require("../connection/db")

const getCreate = (req,res)=>{
    const sql = "INSERT INTO table_test (`name`,`age`) VALUES (?,?)"
    const values = [
        req.body.name,
        req.body.age
    ]
     db.query(sql,values,(err,data)=>{
        if (err) return console.log(err.message)
        return res.json(data)
     })
  }
  module.exports = getCreate