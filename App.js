const express = require("express")
const product = require("./routes/Products")
const test = require("./routes/Test")
const db = require("./connection/db")
const app = express()

app.get("/",(req,res)=>{
    const sql = "SELECT * FROM table_test"
    db.query(sql,(err,data)=>{
        if (err) return console.log(err.message)
            return res.json(data)
    })
  })

  app.use("/product",product)
  app.use("/test",test)
  
module.exports = app