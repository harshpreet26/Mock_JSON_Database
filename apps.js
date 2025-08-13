const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT;
const mongoose = require('mongoose');
const uri = process.env.MONGO_URI;



mongoose.connect(uri).then(
async () => {

  console.log('connected to MongoDB sever');

app.listen(port, () => {
  console.log(`connected to port ${port}`)
});
}).catch(err => { console.log(`error: ${err}`) });
