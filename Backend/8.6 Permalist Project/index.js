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

let items = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];

async function getTasks() {
  const result = await db.query("SELECT * FROM items ORDER BY items.id ASC");
  items = result.rows;
  console.log(result.rows);
}

app.get("/", async (req, res) => {
  await getTasks();
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", async (req, res) => {
  let item = req.body.newItem;
  if (!item) {
    item = null;
  }
  try {
    await db.query("INSERT INTO items (title) VALUES ($1)", [item]);
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.send(
      `<h1>Invalid input!</h1><p style="font-size: 1.5rem;">${error}</br>${error.detail}</p>`
    );
  }
});

app.post("/edit", async (req, res) => {
  const updatedItem = req.body.updatedItemTitle;
  const itemID = req.body.updatedItemId;
  try {
    await db.query("UPDATE items SET title = $1 WHERE items.id = $2", [
      updatedItem,
      itemID,
    ]);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

app.post("/delete", async (req, res) => {
  const deletedItemId = parseInt(req.body.deleteItemId);
  try {
    await db.query("DELETE FROM items WHERE items.id = $1", [deletedItemId]);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
