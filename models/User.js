const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: {
    required: [true, "First name is required."],
    type: String,
    min: [1, "First name must contain 1-30 characters."],
    max: [30, "First name must contain 1-30 characters."],
  },
  lastName: {
    required: [true, "Last name is required."],
    type: String,
    min: [1, "Last name must contain 1-30 characters."],
    max: [30, "Last name must contain 1-30 characters."],
  },
  email: {
    required: [true, "Email is required."],
    type: String,
    min: [3, "Must input a valid email."],
  },
  password: {
    required: [true, "Password is required."],
    type: String,
    min: [8, "Password must contain 8 characters."],
    max: [25, "Password must contain less than 25 characters."],
  },
  favorites: {
    type: []
  },
  containers: {
    type: []
  },
  projects: {
    type: []
  }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
