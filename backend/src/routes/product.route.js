const express = require("express");

const {createProduct} = require("../controllers/products.controller");

const router = express.Router();

router.post("/", createProduct);

module.exports = router;
