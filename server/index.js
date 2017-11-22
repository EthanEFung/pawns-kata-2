const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.listen(PORT, err => {
  if (err) throw new Error("could not connect with port");
  console.log("connected on port ", PORT);
});
