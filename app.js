require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./config/config");
const clientRouter = require("./routes/clientRouter");
const adminRouter = require("./routes/adminRouter");

db.on("error", (err) => console.log(err));
db.once("open", () => console.log("connected to database"));

app.use(express.json());

app.use("/client", clientRouter);
app.use("/admin", adminRouter);

app.listen(process.env.PORT, () => {
  console.log("connected to server " + process.env.PORT);
});
