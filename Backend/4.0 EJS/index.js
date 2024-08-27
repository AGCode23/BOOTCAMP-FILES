import express from "express";
const app = express();
const port = 3000;

const d = new Date();
let day = d.getDay();

app.get("/", (req, res) => {
  let dayToday = "the weekends";
  let advice = "it's time to have fun";
  if (day >= 1 && day <= 5) {
    dayToday = "a weekdays";
    advice = "it's time to work hard";
  }
  res.render("index.ejs", { day: dayToday, advice: advice });
});

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
