import mongoose from "mongoose";
const Schema = mongoose.Schema;

const remsschema = new Schema({
  firstname: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phonenumber: {
    phonenumber: Number,
    require: true,
  },
  password: {
    password: String,
    require: true,
  },
});

const Foodstore = mongoose.model("Food", remsschema);

module.exports = Foodstore;
