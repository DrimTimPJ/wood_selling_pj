const mongoose = require('mongoose');
const mongodb = require('./env')
const express = require('express');
const app = express();
app.use(express.json());

mongoose.connect(mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("Connection error:", err));

  