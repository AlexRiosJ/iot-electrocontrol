require("dotenv").config();
const express = require("express");
const path = require("path");
const connectDB = require("./config/db");

const app = express();
connectDB();

const PORT = process.env.PORT;

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}`)
);
