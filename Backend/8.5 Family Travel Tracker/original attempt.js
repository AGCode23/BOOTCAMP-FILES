import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import env from "dotenv";

const app = express();
const port = 3000;
env.config();

const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DB,
  password: process.env.PG_PASS,
  port: parseInt(process.env.PG_USER, 10),
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentUserId = 1;

async function usersInfo() {
  let result = await db.query("SELECT * FROM users");
  let users = [];
  result.rows.forEach((user) => {
    users.push(user);
  });
  return users;
}

async function checkVisisted() {
  const result = await db.query(
    "SELECT country_code FROM users JOIN visited_countries ON users.id = user_id WHERE user_id = $1",
    [currentUserId]
  );
  const colorDB = await db.query(
    "SELECT color FROM users WHERE users.id = $1",
    [currentUserId]
  );
  let countries = [];
  let color = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  colorDB.rows.forEach((c) => {
    color.push(c.color);
  });
  console.log(color);
  return { countries, color };
}
app.get("/", async (req, res) => {
  const countries = await checkVisisted();
  const users = await usersInfo();
  res.render("index.ejs", {
    countries: countries.countries,
    total: countries.countries.length,
    users: users,
    color: countries.color,
  });
});
app.post("/add", async (req, res) => {
  const input = req.body["country"];

  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()]
    );

    const data = result.rows[0];
    const countryCode = data.country_code;
    try {
      await db.query(
        "INSERT INTO visited_countries (country_code, user_id) VALUES ($1, $2)",
        [countryCode, currentUserId]
      );
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
});
app.post("/user", async (req, res) => {
  currentUserId = req.body.user;
  if (req.body.add) {
    res.render("new.ejs");
  } else {
    res.redirect("/");
  }
});

app.post("/new", async (req, res) => {
  //Hint: The RETURNING keyword can return the data that was inserted.
  //https://www.postgresql.org/docs/current/dml-returning.html
  const userName = req.body.name;
  const userColor = req.body.color;
  try {
    await db.query(
      "INSERT INTO users (name, color) VALUES ($1, $2) RETURNING users.id",
      [userName, userColor]
    );
    const lastRecord = await db.query(
      "SELECT users.id from users ORDER BY users.id DESC LIMIT 1"
    );
    currentUserId = lastRecord.rows[0].id;
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
