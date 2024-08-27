import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import env from "dotenv";

env.config();
const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DB,
  password: process.env.PG_PASS,
  port: parseInt(process.env.PG_USER, 10),
});

db.connect();

async function visited() {
  let visitedCountries = [];
  let total = 0;
  const visitedResult = await db.query(
    "SELECT country_code FROM visited_countries"
  );
  const visited = visitedResult.rows;
  visited.forEach((country) => {
    visitedCountries.push(country.country_code);
  });
  total = visitedResult.rowCount;
  return { visitedCountries, total };
}

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  //Write your code here.
  const countries = await visited();
  res.render("index.ejs", {
    total: countries.total,
    countries: countries.visitedCountries,
  });
});

app.post("/add", async (req, res) => {
  const userInput = req.body.country;
  try {
    let countriesResult = await db.query(
      "SELECT country_code, country_name FROM countries WHERE country_name LIKE '%' || $1 || '%'",
      [userInput.replace(/\b\w/g, (char) => char.toUpperCase())]
    );
    const data = countriesResult.rows[0].country_code;
    try {
      await db.query(
        "INSERT INTO visited_countries (country_code) VALUES ($1)",
        [data]
      );
      res.redirect("/");
    } catch (err) {
      console.log(err);
      const country = await visited();
      res.render("index.ejs", {
        total: country.total,
        countries: country.visitedCountries,
        error: "Country has already been added, please try again.",
      });
    }
  } catch (err) {
    console.log(err);
    const country = await visited();
    res.render("index.ejs", {
      total: country.total,
      countries: country.visitedCountries,
      error: "Country does not exist, please try again.",
    });
  }

  // let countryName = "";
  // const countriesResult = await db.query(
  //   "SELECT country_code, country_name FROM countries"
  // );

  // const countries = countriesResult.rows;
  // countries.forEach((country) => {
  //   if (userInput.toLowerCase() === country.country_name.toLowerCase())
  //     countryName = country;
  // });
  // db.query(
  //   "INSERT INTO visited_countries (country_code) VALUES ($1)",
  //   [countryName.country_code],
  //   (err, res) => {
  //     if (err) console.error("Error executing query", err.stack);
  //   }
  // );
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
