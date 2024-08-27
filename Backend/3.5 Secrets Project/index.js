//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var authStatus = false;

app.use(bodyParser.urlencoded({ extended: true }));

function validationPage(req, res, next) {
  var userHasTyped = req.body.password;
  const validPass = "ILoveProgramming";
  if (userHasTyped === validPass) {
    authStatus = true;
  }
  next();
}

app.use(validationPage);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  if (authStatus) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.redirect("/");
  }
});

app.listen(port, () => {
  console.log("Server has been started at port " + port);
});
