const express = require("express"); //commonjs
const app = express(); // khởi tạo express
const port = 8080; //port
// khai báo route ("/") và trả về hành động
app.get("/", (req, res) => {
  res.send("Hello World!");
});
// syntax: app.method(path, handler(là function xử lý khi route được match)) - method: get, post, put, delete ...
app.get("/abc", (req, res) => {
  res.send("<h1>check abc<h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
