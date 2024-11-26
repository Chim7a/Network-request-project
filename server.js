import "dotenv/config";
import express from "express";
import fs from "fs";

const app = express();
const port = 9000;

// Built-in middleware for static files. CSS
app.use(express.static("views"));
// Connect to html page in views
app.get("/", (req, res) => {
  const Weather_Homepage = fs.readFileSync("views/index.html", "utf-8");
  res.status(200).send(Weather_Homepage);
});
// connect to dotenv from backend to frontend
app.get("/private_key", (req, res) => {
  const private_key = process.env.WEATHER_API;
  res.status(200).json({ key: private_key });
});

// Running server
app.listen(port, () => {
  console.log("Server start and listening at port " + port);
});
