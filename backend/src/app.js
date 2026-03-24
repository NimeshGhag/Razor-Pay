const express = require("express");
const cors = require("cors");

const productRoute = require("./routes/product.route");
const paymentRoute = require("./routes/payment.routes");

const app = express();
app.use(cors());

app.use(express.json());

app.use("/api/products", productRoute);
app.use("/api/payments", paymentRoute);

module.exports = app;
