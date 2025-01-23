const express = require("express");
const {
  getHomepage,
  getAbc,
  getYamato,
  getCreateUser,
} = require("../controllers/homeController");
const router = express.Router();

// Giờ file này chỉ cần khai báo tên hàm bên file homeController thôi còn lại thì chỉ cần như ở dưới là đượcđược

router.get("/", getHomepage);

router.get("/abc", getAbc);

router.get("/yamato", getYamato);

router.post("/create-user", getCreateUser);

module.exports = router;
