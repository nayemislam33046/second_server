const express = require("express")
const getCreate = require("../controller/Create")

const router = express.Router()
router.post("/",getCreate)
module.exports = router 