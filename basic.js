const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("i am in middleware");
  next();
});

app.use((req, res, next) => {
  res.send({ key: 1000 });
});

app.listen(8000);
