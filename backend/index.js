const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const MembeModel = require("./models/Member");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://linukalolitha:ATlinuka2002@fooditemcart.lldaazf.mongodb.net/FoodStore"
);

app.post("/register", (req, res) => {
  MembeModel.create(req, body)
    .then((FoodItem) => res.json(FoodItem))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("server is running");
});
