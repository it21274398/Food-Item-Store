const mongoose = require("mongoose");

const Memberscheema = new mongoose.Schema({
  firstName: {
    type: String,
    requireL: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  conformPassword: {
    type: String,
    require: true,
  },
});

const MembeModel = mongoose.model("FoodItem", Memberscheema);
module.exports = MembeModel;
