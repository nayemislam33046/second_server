const express = require("express")
const getProduct = require("../controller/Product")
const router = express.Router()
router.get("/",getProduct)
module.exports = router