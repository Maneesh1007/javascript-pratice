const express = require("express");
const bodyParser = require("body-parser");
const { AsyncLocalStorage } = require("async_hooks");

const localStorage = new AsyncLocalStorage();

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));

router.get("/login", (req, res, next) => {
  res.send(
    '<form action="/storage" method="POST"><input type="text" name="username" /><button type="submit">Login</button></form>'
  );
});

router.post("/storage", (req, res, next) => {
  console.log(req.body);

  res.redirect("/");
});

module.exports = router;
