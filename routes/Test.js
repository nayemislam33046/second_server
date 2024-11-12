const express = require("express")
const getTest = require("../controller/Test")
const router = express.Router()
router.get("/",getTest)
module.exports = router 