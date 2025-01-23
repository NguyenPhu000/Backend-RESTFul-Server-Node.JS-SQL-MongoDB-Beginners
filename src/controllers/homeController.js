const connection = require("../config/database");
// syntax: app.method(path, handler(là function xử lý khi route được match)) - method: get, post, put, delete ...
const getHomepage = (req, res) => {
  return res.render("home.ejs");
};
const getAbc = (req, res) => {
  res.send("<h1>check abc<h1>");
};
const getYamato = (req, res) => {
  // res.send("<h1>check abc<h1>");
  res.render("sample.ejs");
};
const getCreateUser = (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;

  connection.query(
    `  INSERT INTO 
    Users (email, name, city)
    VALUES (?, ?, ?)`,
    [email, name, city],
    function (err, result) {
      console.log(result);
      res.send("Create user success");
    }
  );
};
// export các hàm để sử dụng ở file khác
// file này sau này sẽ có nhiều file nữa nên là cần khai báo module.export theo kiểu object
module.exports = {
  getHomepage,
  getAbc,
  getYamato,
  getCreateUser,
};
