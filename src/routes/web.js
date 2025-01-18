const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!&nodemon");
});
// syntax: app.method(path, handler(là function xử lý khi route được match)) - method: get, post, put, delete ...
router.get("/abc", (req, res) => {
  res.send("<h1>check abc<h1>");
});

router.get("/yamato", (req, res) => {
  // res.send("<h1>check abc<h1>");
  res.render("sample.ejs");
});

module.exports = router;
