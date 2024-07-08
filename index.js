const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Middleware:
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('crud server is running!')
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});