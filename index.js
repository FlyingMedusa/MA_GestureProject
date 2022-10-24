const express = require("express");
const cookieParser = require("cookie-parser");
const hbs = require("express-handlebars");
const path = require("path");
const { homeRouter } = require("./routes/home");
const { choiceRouter } = require("./routes/choice");
const { aboutRouter } = require("./routes/about");
const { methodologyRouter } = require("./routes/methodology");
const { referencesRouter } = require("./routes/references");
const { handlebarsHelpers } = require("./utils/handlebars-helpers");

const app = express();

app.use(express.static("public"));
app.use(cookieParser());
// app.use(express.urlencoded({
//     extended: true,
// }));
app.engine(
  ".hbs",
  hbs.engine({
    extname: ".hbs",
    helpers: handlebarsHelpers,
  })
);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "views"));

app.use("/", homeRouter);
app.use("/choice", choiceRouter);
app.use("/about", aboutRouter);
app.use("/methodology", methodologyRouter);
app.use("/references", referencesRouter);

app.listen(5500, "localhost");
