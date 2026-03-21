const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to DB");
  } catch (error) {
    console.error(error);
    process.exit(2);
  }
};

module.exports = connectToDB;
