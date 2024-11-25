import dotenv from "dotenv/config";
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

// Running server
app.listen(port, () => {
  console.log("Server start and listening at port " + port);
});
