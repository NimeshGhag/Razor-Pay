const Razorpay = require("razorpay");
const paymentModel = require("../models/payment.model");
const productModel = require("../models/product.model");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const createOrder = async (req, res) => {
  const product = await productModel.findOne();

  const options = {
    amount: product.price.amount,
    currency: product.price.currency,
  };

  try {
    const order = await razorpay.orders.create(options);
    const newPayment = await paymentModel.create({
      orderId: order.id,
      price: options,
      status: "PENDING",
    });
    res.status(201).json({
      message: "Order created successfully",
      order,
      payment: newPayment,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = {
  createOrder,
};