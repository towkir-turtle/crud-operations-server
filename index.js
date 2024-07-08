const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// Middleware:
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://crudServerUser:O7E0YCqw7arq4cZw@cluster0.pm0p0t4.mongodb.net/crud-server?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("database connected");
  })
  .catch(() => {
    console.log("connection failed!");
  });

app.get("/", (req, res) => {
  res.send("crud server is running!");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
