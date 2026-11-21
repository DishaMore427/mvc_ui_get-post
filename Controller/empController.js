const mongoose = require("mongoose");
const empModel = require("../Model/empModel");

const displayEmpInfo = async (req, resp) => {
  try {
    const result = await empModel.find();
    resp.render("home", { result });
  } catch (error) {
    console.log(error);
  }
};

const addEmp = async (req, resp) => {
  try {
    const { name, salary, dept } = req.body;
    await empModel.create({ name, salary, dept });
    resp.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

const addform = (req, resp) => {
  resp.render("addform");
};

module.exports = { displayEmpInfo, addEmp, addform };
