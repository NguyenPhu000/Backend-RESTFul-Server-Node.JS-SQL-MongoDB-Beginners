const express = require("express");
const {
  getHomepage,
  getAbc,
  getYamato,
  getCreateUser,
  getCreatePage,
  getUpdatePage,
  getUpdateUser,
} = require("../controllers/homeController");
const router = express.Router();

// Giờ file này chỉ cần khai báo tên hàm bên file homeController thôi còn lại thì chỉ cần như ở dưới là đượcđược

router.get("/", getHomepage);

router.get("/abc", getAbc);

router.get("/yamato", getYamato);

router.get("/create", getCreatePage);
// su dung : de truyen tham so vao trong url
router.get("/update/:userID", getUpdatePage);

router.post("/create-user", getCreateUser);
router.post("/update-user", getUpdateUser);

module.exports = router;
