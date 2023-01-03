require("dotenv").config();
const mongoose = require("mongoose");

const { MONGO_URI } = process.env;
const configOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(MONGO_URI, configOptions)
  .then(() => {
    console.log("MongoDB successfully connected...");
  })
  .catch((err) => console.log("MongoDB connection error: ", err));

module.exports = {
  User: require("./User")
};