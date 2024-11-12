const express = require("express");
const getProduct = require("../Controller/Product");
const router = express.Router();
router.get("/product", getProduct);
module.exports = router; 