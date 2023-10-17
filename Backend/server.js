const express = require("express");
const mongoose = require("mongoose");
const bodyParfser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParfser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopologyL: true,
  useFinndModifyL: false,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log(`MongoDB connected successfully on ${URL}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
