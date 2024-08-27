import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import env from "dotenv";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

env.config();

const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DB,
  password: process.env.PG_PASS,
  port: parseInt(process.env.PG_USER, 10),
});

db.connect();

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  let email = req.body.username;
  let password = req.body.password;

  try {
    const checkEmail = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (checkEmail.rowCount > 0) {
      res.send("<p style = 'font-size: 1.5rem'> Email already exist. </p>");
    } else {
      if (!email || !password) {
        email = null;
        password = null;
      }
      try {
        await db.query("INSERT INTO users (email, password) VALUES ($1, $2)", [
          email,
          password,
        ]);
        res.render("secrets.ejs");
      } catch (error) {
        console.log(error);
      }
    }
  } catch (error) {
    console.log(error);
  }
});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const checkEmail = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (checkEmail.rowCount > 0) {
      checkEmail.rows[0].password === password
        ? res.render("secrets.ejs")
        : res.send("Invalid password.");
    } else {
      res.send("No such email exist.");
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
