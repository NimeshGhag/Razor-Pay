const express = require("express");

const productRoute = require("./routes/product.route");

const app = express();

app.use("/api/products", productRoute);

app.use(express.json());

module.exports = app;
