require("dotenv").config();
const express = require("express"); //commonjs
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");
const app = express(); // khởi tạo express
const port = process.env.PORT || 8888; //port // nếu không có port thì mặc định là 8888
const hostname = process.env.HOST_NAME; //hostname

// config req.body
//
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data
// config template engine
configViewEngine(app);

// khai báo route ("/") và trả về hành động
app.use("/", webRoutes);

// A simple SELECT query
connection.query(
  "select * from Users u"
  //
  // function (err, results, fields) {
  //   console.log(">>>results = ", results); // results contains rows returned by server
  //   // console.log(">>>fields = ", fields); // fields contains extra meta data about results, if available
  // }
);
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
