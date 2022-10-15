const express = require("express");
const aboutRouter = express.Router();

aboutRouter.get("/", (req, res) => {
  res.render("details/about");
});

module.exports = {
  aboutRouter,
};
