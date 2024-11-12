const express = require("express");
const Product = require("./router/Products");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", Product);
module.exports = app; 