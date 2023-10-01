const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title" /><input type="text" name="tag" /><button type="submit">Add</button></form>'
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);

  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello this is express Framework</h1>");
});

app.listen(8000);
