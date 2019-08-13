const express = require("express");
const { resolve, join } = require("path");
const Logger = require("morgan");
const { renderFile } = require("ejs");

let app = express();
let PORT = 3000;
console.log("Instantiating Server...!!");
app.use(Logger("dev"));
app.use(express.static(join(__dirname, "src")));
app.set("views", __dirname + "/views");
app.engine("html", renderFile);
app.set("view engine", "ejs");
/*****************************************avialable routes*******************/
app.get("/", (req, res, next) => {
  try {
    res.status(200).render("index");
  } catch (err) {
    next(err);
  }
});
app.get("/privateVarCreation", (req, res) => {
  res.status(200).render("pvc");
});
/******************************************************************* */
console.log("Server Instantiated...!!");

/****************** middle wares********************************/
let errorHandler = (err, req, res, next) => {
  console.log("error:", err);
  res.status(500).send("internal server error");
};

app.use(errorHandler);

/*****************************************************************/

app.listen(PORT, () => console.log("node server started on port:", PORT));
