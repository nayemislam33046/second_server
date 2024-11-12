const express = require("express")
const app = express()
require("dotenv").config()
const PORT = process.env.PORT;

app.get("/",(req,res)=>{
  return res.send("Hello Mister")
})

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});