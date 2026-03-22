const productModel = require("../models/product.models");

const createProduct = async (req, res) => {
  const {
    image,
    title,
    description,
    price: { amount, currency },
  } = req.body;

  try {
    const product = await productModel.create({
      image,
      title,
      description,
      price: { amount, currency },
    });

    return res.status(201).json({
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    return res.status(500).json({
      message: "somthing went wrong",
      error: error.message,
    });
  }
};

const getProduct = async (req, res) => {
  try {
    const product = await productModel.find();

    return res.status(200).json({
      message: "Product fetched successfully",
      product,
    });
  } catch (error) {
    return res.status(500).json({
      message: "somthing went wrong",
      error: error.message,
    });
  }
};

module.exports = {
  createProduct,
  getProduct,
};
