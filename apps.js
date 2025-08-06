const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT;


app.listener(PORT, () => {
  console.log(`connected to port ${port}`);
});
