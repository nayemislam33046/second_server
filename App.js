const express = require("express")
const product = require("./routes/Products")
const test = require("./routes/Test")
const app = express()

app.get("/",(req,res)=>{
    return res.send("Hello Mister")
  })
  
  app.use("/product",product)
  app.use("/test",test)
  
module.exports = app