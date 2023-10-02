const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));

router.get("/", (req, res, next) => {
  res.send(
    '<form action="/message" method="POST"><input type = "text" name = "message" /><button type="submit">Send</button> </form>'
  );
});

router.post("/message", (req, res, next) => {
  fs.writeFile("username.txt", req.body, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/");
    }
  });
});

module.exports = router;
