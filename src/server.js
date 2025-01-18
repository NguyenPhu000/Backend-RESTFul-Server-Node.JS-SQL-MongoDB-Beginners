require("dotenv").config();
const express = require("express"); //commonjs
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");

const mysql = require("mysql2");

const app = express(); // khởi tạo express
const port = process.env.PORT || 8888; //port // nếu không có port thì mặc định là 8888
const hostname = process.env.HOST_NAME; //hostname

// config template engine
configViewEngine(app);

// khai báo route ("/") và trả về hành động
app.use("/", webRoutes);

// test connection
const connection = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "123456",
  database: "yamato",
});
// A simple SELECT query
connection.query(
  "select * from Users u",
  //
  function (err, results, fields) {
    console.log(">>>results = ", results); // results contains rows returned by server
    console.log(">>>fields = ", fields); // fields contains extra meta data about results, if available
  }
);
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
