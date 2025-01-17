const express = require("express"); //commonjs
const path = require("path"); //them thu vien path
require("dotenv").config();

const app = express(); // khởi tạo express
const port = process.env.PORT || 8888; //port // nếu không có port thì mặc định là 8888
const hostname = process.env.HOST_NAME; //hostname

// config template engine
app.set("views", path.join(__dirname, "views")); // sử dụng path để join đường dẫn
app.set("view engine", "ejs");

//config static folder
app.use(express.static(path.join(__dirname, "public")));

// khai báo route ("/") và trả về hành động
app.get("/", (req, res) => {
  res.send("Hello World!&nodemon");
});
// syntax: app.method(path, handler(là function xử lý khi route được match)) - method: get, post, put, delete ...
app.get("/abc", (req, res) => {
  res.send("<h1>check abc<h1>");
});

app.get("/yamato", (req, res) => {
  // res.send("<h1>check abc<h1>");
  res.render("sample.ejs");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
