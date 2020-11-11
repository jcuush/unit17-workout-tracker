const express = require("express");
const mongojs = require("mongojs");

const app = express();

const databaseUrl = "workout";
const collections = ["workoutSeeds"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
  console.log("Database Error:", error);
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(3000, () => {
  console.log("App running on port 3000!");
});