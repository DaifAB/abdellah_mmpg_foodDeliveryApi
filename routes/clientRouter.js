const router = require("express").Router();
const { getAllClients } = require("../controllers/clientController");
const {
  verifyAdminToken,
} = require("../controllers/tokenVerification/verifyToken");

router.get("/getAll", verifyAdminToken, getAllClients);

module.exports = router;
