const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Item = require("./Models/item.model.js");
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

    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  })
  .catch(() => {
    console.log("connection failed!");
  });

// get API:
app.get("/items", async (req, res) => {
  try {
    const items = await Item.find({});
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get single item:
app.get("/items/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Item.findById(id);
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// post API:
app.post("/items", async (req, res) => {
  try {
    const item = await Item.create(req.body);
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// update an item:
app.put("/items/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Item.findByIdAndUpdate(id, req.body);
    const updatedItem = await Item.findById(id);
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// delete an item:
app.delete("/items/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteItem = await Item.findByIdAndDelete(id);
    res.status(200).json("successfully deleted item");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
