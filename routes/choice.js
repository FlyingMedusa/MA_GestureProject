const express = require("express");
const choiceRouter = express.Router();

choiceRouter.get("/:opinion", (req, res) => {
  res.render("home/choice");
});

module.exports = {
  choiceRouter,
};
