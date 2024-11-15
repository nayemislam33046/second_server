const express = require("express")
const cors = require("cors")
const product = require("./routes/Products")
const test = require("./routes/Test")
const db = require("./connection/db")
const getCreate = require("./routes/Create")
const app = express() 
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true)
  next()
})
app.use(cors({
  origin:"https://client-two-eta-37.vercel.app",
  methods:["GET","POST"],
  credentials:true
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    const sql = "SELECT * FROM table_test"
    db.query(sql,(err,data)=>{
        if (err) return console.log(err.message)
         return res.json(data)
    }) 
  })
  app.use("/create",getCreate)
  app.use("/product",product)
  app.use("/test",test)
module.exports = app