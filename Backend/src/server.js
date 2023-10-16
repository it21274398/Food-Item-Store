import express from "express";
import cors from "cors";
import "dotenv/config";
import { connect } from "./utils/database.connnection";

const app = express();
const PORT = process.env.PORT || "8070";

app.use(cors());
app.use(express.json({ limit: "20mb" }));

app.get("/", (req, res, next) => {
  res.send("<h2> 🏥 Dental Clinic Management System API</h2>");
  next();
});

const ticketRouter = require("./api/routes/ticket.js");
// const adminRouter = require("./api/routes/adminticket.js");

app.use("/ticket", ticketRouter);
// app.use("/adminticket", adminRouter);

const server = app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT}`);
  connect();
});
