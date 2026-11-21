const express = require("express");
const { connectDB } = require("./db");
const router = require("./Router/empRouter");
const app = express();
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use("/", router);

app.listen(4000, (req, resp) => {
  console.log("Running..");
});
