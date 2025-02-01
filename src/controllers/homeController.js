const connection = require("../config/database");
const { get } = require("../routes/web");
const {
  getAllUsers,
  getUserById,
  updateUserById,
} = require("../services/CRUDservice");
// syntax: app.method(path, handler(là function xử lý khi route được match)) - method: get, post, put, delete ...
const getHomepage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
};

const getAbc = (req, res) => {
  res.send("<h1>check abc<h1>");
};

const getYamato = (req, res) => {
  // res.send("<h1>check abc<h1>");
  res.render("sample.ejs");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const getCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;

  // connection.query(
  //   `  INSERT INTO
  //   Users (email, name, city)
  //   VALUES (?, ?, ?)`,
  //   [email, name, city],
  //   function (err, result) {
  //     console.log(result);
  //     res.send("Create user success");
  //   }
  // );

  let [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
    [email, name, city]
  );
  console.log("check result>>> ", results);

  res.send("Create user success");
};

const getUpdatePage = async (req, res) => {
  const userID = req.params.userID; // lấy giá trị từ url
  let user = await getUserById(userID); // lấy dữ liệu user từ db
  res.render("edit.ejs", { userEdit: user }); // render ra view edit.ejs
};
const getUpdateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  let userId = req.body.userId;

  await updateUserById(email, name, city, userId);
  // res.redirect sẽ chuyển hướng người dùng sang trang khác
  res.redirect("/");
};
// export các hàm để sử dụng ở file khác
// file này sau này sẽ có nhiều file nữa nên là cần khai báo module.export theo kiểu object
module.exports = {
  getHomepage,
  getAbc,
  getYamato,
  getCreateUser,
  getCreatePage,
  getUpdatePage,
  getUpdateUser,
};
