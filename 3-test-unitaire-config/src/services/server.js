const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const apiRouter = require("../routes");
const config = require("../../configs");

const port = config.server.port;

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});
app.use("/api/v1", apiRouter);

exports.start = () => {
  app.listen(port, (err) => {
    if (err) {
      console.log(`Errors: ${err}`);
      process.exit(-1);
    }
    console.log(`app is running on port ${port}`);
  });
};
