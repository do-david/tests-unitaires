require('dotenv').config();
const app = require('./services/server');
const mongoService = require('./services/mongoose');

mongoService.dbConnect();
app.start();