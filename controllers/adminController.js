const Admin = require("../models/admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.adminRegister = async (req, res, next) => {
  //HASH PASSWORD
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const admin = new Admin({
    username: req.body.username,
    password: hashedPassword,
  });

  try {
    const savedAdmin = await admin.save();
    res.send(savedAdmin);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.adminLogin = async (req, res, next) => {
  const admin = await Admin.findOne({ username: req.body.username });
  if (!admin) return res.status(400).send("Username not found");

  const validPass = await bcrypt.compare(req.body.password, admin.password);
  if (!validPass) return res.status(400).send("Invalid password");

  const token = jwt.sign({ _id: admin._id }, process.env.ADMIN_TOKEN);
  res.header("auth-token", token).send(token);
};
