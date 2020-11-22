require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB();

const PORT = process.env.PORT;

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}`)
);
