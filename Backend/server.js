const express = require("express");
const cors = require("cors"); // Assuming you've installed the cors package.
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8071;
app.use(cors());

// Connect to MongoDB
mongoose.connect(
  "mongodb://linukajayasinghe:Linuka@2002@localhost:27017/my-database",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
