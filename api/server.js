const express = require("express");
const cors = require('cors');

const path = __dirname + "/app/views/";

//express
const app = express();

app.use(express.static(path));

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//configure db
const dbConfig = require("./config/database.config");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

app.get("/", function (req, res) {
  res.sendFile(path + "index.html");
});

//router
require("./app/routes/device.routes")(app);

app.listen(3001, () => {
  console.log("Server is listening on port 3001");
});
