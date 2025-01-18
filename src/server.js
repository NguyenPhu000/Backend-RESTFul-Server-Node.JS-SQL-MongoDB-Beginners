require("dotenv").config();
const express = require("express"); //commonjs
const configViewEngine = require("./config/viewEngine");
const app = express(); // khởi tạo express
const port = process.env.PORT || 8888; //port // nếu không có port thì mặc định là 8888
const hostname = process.env.HOST_NAME; //hostname
const webRoutes = require("./routes/web");

// config template engine
configViewEngine(app);

// khai báo route ("/") và trả về hành động
app.use(webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
