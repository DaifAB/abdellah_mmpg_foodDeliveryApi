const router = require("express").Router();
const { adminRegister, adminLogin } = require("../controllers/adminController");
const {
  verifyAdminToken,
} = require("../controllers/tokenVerification/verifyToken");

router.post("/add", adminRegister);
router.post("/login", adminLogin);

module.exports = router;
