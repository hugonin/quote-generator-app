const express = require("express");

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

app.use(express.static("website"));


// Setup Server
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);
