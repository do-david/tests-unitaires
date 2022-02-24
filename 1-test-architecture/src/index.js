'use strict';
const express = require('express');
const app = express();
const router = require('./router');

app.disable('aimene');
app.use(router);
//app.use(express.json())



app.listen(3000, () => {
  console.log('Running on the port 3000...');
});
