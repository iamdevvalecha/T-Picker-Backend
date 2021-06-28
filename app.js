require('dotenv').config()
const mongoose = require("mongoose");
const express = require("express");
const app = express();
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });
const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
