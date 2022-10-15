const express = require("express");
const referencesRouter = express.Router();

referencesRouter.get("/", (req, res) => {
  res.render("details/references");
});

module.exports = {
  referencesRouter,
};
