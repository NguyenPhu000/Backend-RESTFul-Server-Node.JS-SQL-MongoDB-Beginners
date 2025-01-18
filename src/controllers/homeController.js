// syntax: app.method(path, handler(là function xử lý khi route được match)) - method: get, post, put, delete ...
const getHomepage = (req, res) => {
  // sẽ có process data
  // sẽ call model
  res.send("Hello World!&nodemon");
};
const getAbc = (req, res) => {
  res.send("<h1>check abc<h1>");
};
const getYamato = (req, res) => {
  // res.send("<h1>check abc<h1>");
  res.render("sample.ejs");
};

// export các hàm để sử dụng ở file khác
// file này sau này sẽ có nhiều file nữa nên là cần khai báo module.export theo kiểu object
module.exports = {
  getHomepage,
  getAbc,
  getYamato,
};
