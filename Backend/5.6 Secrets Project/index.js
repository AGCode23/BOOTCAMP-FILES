// HINTS:
// 1. Import express and axios
import express from "express";
import axios from "axios";
import env from "dotenv";

// 2. Create an express app and set the port number.
const app = express();
const port = parseInt(process.env.PORT, 10);
const API_URL = process.env.API;
env.config();

// 3. Use the public folder for static files.
app.use(express.static("public"));

app.get("/", async (req, res) => {
  // 4. When the user goes to the home page it should render the index.ejs file.
  // 5. Use axios to get a random secret and pass it to index.ejs to display the
  // secret and the username of the secret.
  try {
    const response = await axios.get(API_URL);
    const result = response.data;
    res.render("index.ejs", { secret: result.secret, user: result.username });
  } catch (error) {
    res.render("index.ejs", {
      error: error.message,
      errorBody: error.response.data,
    });
  }
});

// 6. Listen on your predefined port and start the server.
app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
