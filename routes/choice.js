const express = require("express");
const choiceRouter = express.Router();

choiceRouter.get("/:opinion", (req, res) => {
  const { opinion } = req.params;
  if (opinion !== "yes" && opinion !== "no") {
    return res.render("error", {
      errorType: `418`,
      description: `Sorry, a choice named "${opinion}" was never an option.`,
    });
  } else if (opinion == "yes") {
    res.render("home/choice", { positive: 1 });
  } else if (opinion == "no") {
    res.render("home/choice", { positive: 0 });
  }
});

module.exports = {
  choiceRouter,
};
