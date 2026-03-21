const express = require("express");

const {
  createProduct,
  getProduct,
} = require("../controllers/products.controller");

const router = express.Router();

router.post("/", createProduct);
router.get("/product",getProduct);

module.exports = router;
