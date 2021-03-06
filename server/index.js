const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbconnection = require("./nano");
const app = express();
const port = 8000;

app.use(
  cors({
    origin: "http://localhost:4200",
  })
);
app.use(bodyParser.json());

app.post("/postdata", function (req, res) {
  var objectnew = {
    movietitle: req.body.movietitle,
    director: req.body.director,
    producer: req.body.producer,
    ReleaseDate: req.body.date,
    staring: req.body.staring,
    image: req.body.image,
    type: req.body.type,
  };

  console.log("data from angular", objectnew);
  dbconnection.moviesdb.insert(objectnew).then((data) => {
    console.log("data inserted successfully ", data);
  });
});

app.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }

  console.log(`server is listening on http://localhost:${port}`);
});
