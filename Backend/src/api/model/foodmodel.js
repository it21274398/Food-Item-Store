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
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

constyped = mongoose.model("Food", remsschema);

module.exports = Food;
