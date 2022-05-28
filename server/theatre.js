const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbconnection = require("./nano");
const { request } = require("express");
const { response } = require("express");
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
    theatrename: req.body.theatrename,
    location: req.body.location,
    performance: req.body.performance,
    features: req.body.features,
    address: req.body.address,
    contact: req.body.contact,
    type: req.body.type,
  };
  console.log("data from angular", objectnew);
  dbconnection.moviesdb.insert(objectnew).then((data) => {
    console.log("data inserted successfully ", data);
  });
});

app.get("/getuser", function (req, res) {
  console.log("retrived....", req.params);
  var obj = {
    selector: {
      type: "movies",
    },
  };

  dbconnection.moviesdb
    .find(obj)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log("error", err);
    });
});

app.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }

  console.log(`server is listening on http://localhost:${port}`);
});
