import express from "express";
const app = express();
const port = 3000;

// !important!
// you need to install the following libraries |express|[dotenv > if required]
// or run this command >> npm i express dotenv

app.get("/", (req, res) => {
  res.send("<h1>World</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
});

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
