import express from "express";
import axios from "axios";
import env from "dotenv";

const app = express();
const port = parseInt(process.env.PORT, 10);
const API_URL = process.env.API;
env.config();

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = process.env.API_USERNAME;
const yourPassword = process.env.API_PASSWORD;
const yourAPIKey = process.env.API_KEY;
const yourBearerToken = process.env.BEARER_TOKEN;
const token = { headers: { Authorization: `Bearer ${yourBearerToken}` } };
app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  try {
    const response = await axios.get(API_URL + "random");
    const result = response.data;
    const resultStr = JSON.stringify(result);
    console.log(result);
    res.render("index.ejs", { content: resultStr });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.status(429).send("Error: " + error.message);
  }
});

app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */

  try {
    const response = await axios.get(API_URL + "all", {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
      params: {
        page: 2,
      },
    });
    const result = response.data;
    const resultStr = JSON.stringify(result);
    res.render("index.ejs", { content: resultStr });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.status(429).send("Error: " + error.message);
  }
});

app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
  try {
    const response = await axios.get(API_URL + "filter", {
      params: {
        score: 5,
        apiKey: yourAPIKey,
      },
    });
    const result = response.data;
    const resultStr = JSON.stringify(result);
    res.render("index.ejs", { content: resultStr });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.status(429).send("Error: " + error.message);
  }
});

app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */

  try {
    const response = await axios.get(API_URL + "secrets/42", token);
    const result = response.data;
    const resultStr = JSON.stringify(result);
    res.render("index.ejs", { content: resultStr });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.status(429).send("Error: " + error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
