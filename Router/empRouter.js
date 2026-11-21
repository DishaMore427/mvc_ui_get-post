const express = require("express");
const {
  displayEmpInfo,
  addform,
  addEmp,
} = require("../Controller/empController");
const router = express.Router();
router.get("/", displayEmpInfo);
router.get("/add", addform);
router.post("/add", addEmp);

module.exports = router;
