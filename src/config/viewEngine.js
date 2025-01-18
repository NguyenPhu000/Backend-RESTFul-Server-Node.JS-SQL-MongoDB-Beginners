const path = require("path");
const express = require("express");
const configViewEngine = (app) => {
  // phải chỉnh lại path tùy thuộc vào tình hình code đang link tới thằng nào và nên dùng console.log("check __dirname: ", __dirname); để log nó ra coi đang ở thằng nào để dễ chỉnh

  app.set("views", path.join("./src", "views")); // sử dụng path để join đường dẫn
  app.set("view engine", "ejs");
  //config static folder
  app.use(express.static(path.join("./src", "public")));
};

module.exports = configViewEngine;
