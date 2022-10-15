const express = require("express");
const methodologyRouter = express.Router();

methodologyRouter.get("/", (req, res) => {
  res.render("details/methodology");
});

module.exports = {
  methodologyRouter,
};
