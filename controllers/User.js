require("dotenv").config();
const database = require("../models");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const registerNewUser = async (req, res) => {
  const userExists = await database.User.findOne({ email: req.body.email });

  if (userExists) {
    res.json("A user with this email already exists.");
  } else {
    database.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    })
      .then((registeredUser) => {
        res.json(registeredUser);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  }
};

const getAll = async (req, res) => {
  database.User.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.json(err);
    });
};

const getByID = async (req, res) => {
  database.User.findById(req.params.id || req.body.id)
    .then((foundUser) => {
      res.json(foundUser);
    })
    .catch((err) => {
      res.json("User not found.");
    });
};

const update = async (req, res) => {
  let filter = req.params.id || req.body.id;
  let update = req.body.payload;
  if (filter && update) {
    database.User.findOneAndUpdate(filter, update, { returnOriginal: false })
      .then((updatedUser) => {
        res.json(updatedUser);
      })
      .catch((err) => {
        res.json(err);
      });
  } else {
    res.json("Failed to update user.");
  }
};

const deleteUser = async (req, res) => {
  database.User.findOneAndDelete({"_id": req.params.id})
    .then(() => {
      res.status(200).json("Delete Successful");
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = {
  registerNewUser,
  getAll,
  getByID,
  update,
  deleteUser,
};
