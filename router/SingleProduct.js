const express = require("express");
const singleData = require("../Controller/SingleProduct");
const router = express.Router();
router.get("/singledata/:id", singleData);
module.exports = router;